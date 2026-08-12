const root = document.querySelector<HTMLElement>('[data-translation-telephone]');

if (root) {
  const form = root.querySelector<HTMLFormElement>('[data-translation-form]')!;
  const loopInput = root.querySelector<HTMLInputElement>('#loop-count')!;
  const sourceSelect = root.querySelector<HTMLSelectElement>('#source-language')!;
  const targetSelect = root.querySelector<HTMLSelectElement>('#target-language')!;
  const textInput = root.querySelector<HTMLTextAreaElement>('#translation-input')!;
  const count = root.querySelector<HTMLElement>('[data-character-count]')!;
  const status = root.querySelector<HTMLElement>('[data-translation-status]')!;
  const results = root.querySelector<HTMLElement>('[data-translation-results]')!;
  const submit = root.querySelector<HTMLButtonElement>('[data-translate]')!;
  const clear = root.querySelector<HTMLButtonElement>('[data-clear]')!;
  let controller: AbortController | undefined;
  let diagnosticCalls = 0;
  const diagnostic = new URLSearchParams(location.search).get('translation-test');

  const languageName = (select: HTMLSelectElement) => select.selectedOptions[0]?.textContent ?? select.value;
  const setStatus = (message: string, error = false) => {
    status.textContent = message;
    status.classList.toggle('text-red-700', error);
  };
  const addResult = (label: string, text: string, stabilized = false) => {
    const article = document.createElement('article');
    article.className = 'ridge-card p-5';
    const heading = document.createElement('h3');
    heading.className = 'm-0 text-base text-primary';
    heading.textContent = stabilized ? `${label} · Stabilized` : label;
    const paragraph = document.createElement('p');
    paragraph.className = 'mb-0 mt-2 whitespace-pre-wrap text-lg';
    paragraph.textContent = text;
    article.append(heading, paragraph);
    results.append(article);
  };

  async function translate(text: string, from: string, to: string, signal: AbortSignal) {
    if (diagnostic === 'error') throw new Error('Diagnostic API failure. Please try again later.');
    if (diagnostic === 'stabilize') {
      await new Promise<void>((resolve, reject) => {
        const timer = window.setTimeout(resolve, 350);
        signal.addEventListener('abort', () => { clearTimeout(timer); reject(new DOMException('Aborted', 'AbortError')); }, { once: true });
      });
      return diagnosticCalls++ % 2 === 0 ? '你好，世界' : textInput.value.trim();
    }
    const url = new URL('https://api.mymemory.translated.net/get');
    url.searchParams.set('q', text);
    url.searchParams.set('langpair', `${from}|${to}`);
    const response = await fetch(url, { signal });
    if (!response.ok) throw new Error(response.status === 429 ? 'Daily API quota exceeded. Please try again tomorrow.' : `Translation request failed (${response.status}).`);
    const data: unknown = await response.json();
    if (!data || typeof data !== 'object') throw new Error('The translation service returned an unexpected response.');
    const payload = data as { responseStatus?: number | string; responseData?: { translatedText?: unknown }; responseDetails?: unknown };
    if (Number(payload.responseStatus) === 429) throw new Error('Daily API quota exceeded. Please try again tomorrow.');
    const translated = payload.responseData?.translatedText;
    if (Number(payload.responseStatus) !== 200 || typeof translated !== 'string') {
      throw new Error(typeof payload.responseDetails === 'string' ? payload.responseDetails : 'Translation failed.');
    }
    return translated;
  }

  const validate = () => {
    const loops = Number(loopInput.value);
    if (!textInput.value.trim()) return 'Please enter some text.';
    if (!Number.isInteger(loops) || loops < 1 || loops > 20) return 'Choose a whole number from 1 to 20 loops.';
    if (sourceSelect.value === targetSelect.value) return 'Please select two different languages.';
    return '';
  };

  const updateLanguageState = () => {
    const same = sourceSelect.value === targetSelect.value;
    submit.disabled = same;
    submit.textContent = same ? 'Select Different Languages' : 'Start Translation';
    if (same) setStatus('Please select two different languages.', true);
    else if (status.textContent === 'Please select two different languages.') setStatus('');
  };

  textInput.addEventListener('input', () => { count.textContent = `${textInput.value.length} characters`; });
  sourceSelect.addEventListener('change', updateLanguageState);
  targetSelect.addEventListener('change', updateLanguageState);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    controller?.abort();
    const validation = validate();
    if (validation) { setStatus(validation, true); return; }

    controller = new AbortController();
    submit.disabled = true;
    clear.disabled = false;
    results.replaceChildren();
    const original = textInput.value.trim();
    addResult('Original', original);
    setStatus('Starting translation…');

    try {
      let current = original;
      const recent: string[] = [];
      const loops = Number(loopInput.value);
      for (let loop = 1; loop <= loops; loop += 1) {
        setStatus(`Loop ${loop} of ${loops}: translating to ${languageName(targetSelect)}…`);
        const outbound = await translate(current, sourceSelect.value, targetSelect.value, controller.signal);
        addResult(`Loop ${loop}: ${languageName(sourceSelect)} → ${languageName(targetSelect)}`, outbound);
        setStatus(`Loop ${loop} of ${loops}: translating back to ${languageName(sourceSelect)}…`);
        const returned = await translate(outbound, targetSelect.value, sourceSelect.value, controller.signal);
        recent.push(returned);
        if (recent.length > 2) recent.shift();
        const stabilized = recent.length === 2 && recent[0] === recent[1];
        addResult(`Loop ${loop}: ${languageName(targetSelect)} → ${languageName(sourceSelect)}`, returned, stabilized);
        current = returned;
        if (stabilized) { setStatus(`Translation stabilized at loop ${loop}.`); return; }
      }
      setStatus(`Finished ${loops} loop${loops === 1 ? '' : 's'}.`);
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') setStatus('Translation cancelled.');
      else setStatus(error instanceof Error ? error.message : 'Translation failed.', true);
    } finally {
      submit.disabled = sourceSelect.value === targetSelect.value;
      submit.textContent = submit.disabled ? 'Select Different Languages' : 'Start Translation';
    }
  });

  clear.addEventListener('click', () => {
    controller?.abort();
    form.reset();
    textInput.value = '';
    count.textContent = '0 characters';
    results.replaceChildren();
    setStatus('Cleared.');
    updateLanguageState();
  });
  addEventListener('pagehide', () => controller?.abort(), { once: true });
  updateLanguageState();
}
