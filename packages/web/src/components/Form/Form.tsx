import { FC, ReactEventHandler, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateUrlMutation } from "../../generated";
import "./Form.css";

export const Form: FC = () => {
  const [createUrl] = useCreateUrlMutation();
  const navigate = useNavigate();

  const onSubmit: ReactEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const url = formData.get("url");
      if (typeof url === "string") {
        const result = await createUrl({ variables: { url } });
        navigate(`/manage/${result.data?.createUrl.id}`);
      }
    },
    []
  );

  return (
    <form className="url-shortener-form" onSubmit={onSubmit}>
      <label>
        URL <input required type="url" placeholder="Enter URL" name="url" />
      </label>
      <button type="submit">Shorten</button>
    </form>
  );
};
