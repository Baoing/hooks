import { useEffect, useState } from "react"

interface useScriptReturn {
  loaded: boolean,
  error: boolean,
  toPromise: () => Promise<any>
}

const useScript = (src: string, id: string): useScriptReturn => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const promise = new Promise((resolve, reject) => {
    useEffect(() => {
      // Check if the script is already present in the document
      const existingScript = document.querySelector(`script[id="${src}"]`)
  
      if (existingScript) {
        setLoaded(true)
        setError(false)
        resolve('');
        return
      }
  
      const script = document.createElement("script")
  
      script.id = id
      script.src = src
      script.async = true
      script.type = 'text/javascript';
  
      const onScriptLoad = () => {
        setLoaded(true)
        setError(false)
        resolve('');
      }
  
      const onScriptError = (err: any) => {
        setLoaded(false)
        setError(true)
        reject(err);
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
  })

  return { loaded, error, toPromise: () => promise };
}

export default useScript;
