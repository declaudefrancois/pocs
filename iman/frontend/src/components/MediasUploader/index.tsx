import { config } from "../../config";
import useUpload from "../../hooks/useUpload";
import Tab from "../Tab";
import MediaPicker from "./MediaPicker";

const FORMATS = ["webp", "avif", "heif", "jpeg", "png", "gif"];


/**
 * 1- Select files.
 * 2- Select and configure operation (compress, convert).
 * 3- Add the task in the local-storage.
 * 4- Render the task in the task list.
 * 5- The processing / status checking  of each task is done when rendering the task.
 */
export default function MediasUploader() {
  const { progress, upload, response, status } = useUpload();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    upload({
      body: new FormData(e.currentTarget),
      url: `${config.API_URL}/tasks`,
      method: "POST",
    });

    e.currentTarget.reset();
  };

  console.log({ progress, response, status });

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:flex-1">
          <MediaPicker />
        </div>
        <Tab defaultKey={0} className="w-full lg:max-w-[500px]">
          <Tab.Item tabKey={0}>
            <Tab.Header>Compress image</Tab.Header>
            <Tab.Content>
              <input
                type="hidden"
                className="hidden"
                name="operation"
                value="compress"
              />
              <p className="py-4">Reduce the file size of your images.</p>
            </Tab.Content>
          </Tab.Item>

          <Tab.Item tabKey={1}>
            <Tab.Header>Convert image</Tab.Header>
            <Tab.Content>
              <input
                type="hidden"
                className="hidden"
                name="operation"
                value="convert"
              />
              <div className="py-4 flex flex-col gap-2">
                <label htmlFor="format">Format</label>
                <select className="rounded-full" name="format">
                  {FORMATS.map((format) => (
                    <option key={format} value={format}>
                      {format.toUpperCase()}
                    </option>
                  ))}
                </select>
              </div>
            </Tab.Content>
          </Tab.Item>
        </Tab>
      </div>
      <button
        disabled={status === "loading"}
        type="submit"
        className="h-14 bg-blue-500 text-white hover:bg-blue-600 w-full mt-8 rounded-full font-medium"
      >
        Start processing
      </button>
    </form>
  );
}
