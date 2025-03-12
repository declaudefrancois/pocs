import { useCallback, useMemo, useState } from "react";

export default function useUpload() {
  const [response, setResponse] = useState<unknown>(null);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState<
    "success" | "error" | "loading" | "uninitialized"
  >("uninitialized");

  const upload = useCallback(
    ({
      body,
      url,
      method = "POST",
    }: {
      url: string;
      body: FormData;
      method: "POST" | "PUT";
    }) => {
      const request = new XMLHttpRequest();
      request.open(method, url);
      request.send(body);

      setStatus("loading");

      request.onload = function () {
        if (!request.status.toString().startsWith("2")) {
          console.log(`Error: ${request.status}: ${request.statusText}`); // e.g. 404: Not Found
          setStatus("error");
          setResponse(request.response);
        } else {
          console.log("Success", {
            response: JSON.parse(request.response),
          });
          setResponse(JSON.parse(request.response));
          setStatus("success");
        }
      };

      request.upload.onprogress = (e) => {
        console.log("Progeress", { e });
        setProgress((e.loaded / e.total) * 100);
      };

      request.onerror = () => {
        setStatus("error");
        console.log("onError", { response: request.response });
      };
    },
    []
  );

  return useMemo(
    () => ({
      upload,
      progress,
      response,
      status,
    }),
    [upload, progress, status, response]
  );
}
