import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

type SelectedFile = File & { preview: string };

export default function MediaPicker() {
  const [files, setFiles] = useState<SelectedFile[]>([]);

  const handleRemove = (file: SelectedFile) => {
    setFiles((prev) => prev.filter((f) => f !== file));
  };

  const onDrop = useCallback((files: File[]) => {
    setFiles((prev) => [
      ...prev,
      ...files.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      ),
    ]);
  }, []);

  const { getInputProps, getRootProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
  });

  return (
    <div className="border rounded-2xl h-96 shadow p-4 bg-white">
      <div
        {...getRootProps()}
        className={`w-full h-full border-2 border-dashed p-4 rounded-2xl hover:border-blue-500 overflow-y-scroll ${
          isDragActive ? "border-blue-500" : ""
        }`}
      >
        <input {...getInputProps()} name="files" multiple type="file" />
        {files.length ? (
          <div className="grid grid-cols-3 gap-4">
            {files.map((file) => (
              <ImagePreview
                key={file.name}
                file={file}
                handleRemove={handleRemove}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center w-full h-full">
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <p>Drag 'n' drop some files here, or click to select files</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ImagePreview({
  file,
  handleRemove,
}: {
  file: SelectedFile;
  handleRemove: (file: SelectedFile) => void;
}) {
  return (
    <div className="flex justify-center items-center relative w-full h-[150px] border rounded-lg overflow-hidden bg-gray-50">
      <button
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleRemove(file);
        }}
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex justify-center items-center z-50"
      >
        &times;
      </button>
      <img
        src={file.preview}
        onLoad={() => {
          // URL.revokeObjectURL(file.preview);
        }}
      />
    </div>
  );
}
