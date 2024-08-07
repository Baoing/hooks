import { useEffect, useState } from "react"

const useScript = (src: string, id: string): { loaded: boolean, error: boolean } => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    // Check if the script is already present in the document
    const existingScript = document.querySelector(`script[id="${src}"]`)

    if (existingScript) {
      setLoaded(true)
      setError(false)
      return
    }

    const script = document.createElement("script")

    script.id = id
    script.src = src
    script.async = true

    const onScriptLoad = () => {
      setLoaded(true)
      setError(false)
    }

    const onScriptError = () => {
      setLoaded(false)
      setError(true)
    }

    script.addEventListener("load", onScriptLoad);
    script.addEventListener("error", onScriptError);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", onScriptLoad);
      script.removeEventListener("error", onScriptError);
      document.body.removeChild(script)
    }
  }, [id]);

  return { loaded, error };
}

export default useScript;
