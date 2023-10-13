const CommonModel = ({
  open,
  handleOpen,
  formInfo,
  setFormInfo,
  handlePost,
  data,
}) => {
  const inPutField = [
    {
      placeholder: "Enter Title",
      type: "text",
      name: "title",
      value: formInfo?.title,
    },
    {
      placeholder: "Enter author",
      type: "text",
      name: "author",
      value: formInfo?.author,
    },
    {
      placeholder: "Enter country",
      type: "text",
      name: "country",
      value: formInfo?.country,
    },
    {
      placeholder: "Enter language",
      type: "text",
      name: "language",
      value: formInfo?.languae,
    },
    {
      placeholder: "Enter link",
      type: "url",
      name: "link",
      value: formInfo?.link,
    },
    {
      placeholder: "Enter pages",
      type: "number",
      name: "pages",
      value: formInfo?.pages,
    },
    {
      placeholder: "Enter year",
      type: "number",
      name: "year",
      value: formInfo?.year,
    },
  ];

  const handleChange = (e) => {
    const value = e.target.value;
    setFormInfo({ ...formInfo, [e.target.name]: value });
  };

  return (
    <div
      className={`w-full h-[100vh] top-0 fixed bg-[rgba(125,125,125,0.7)] z-50 ${
        open ? "visible opacity-100 " : "invisible opacity-0"
      } duration-150 transition-opacity ease-in-out  `}
    >
      <div
        className="w-full h-full flex items-center justify-center"
        onClick={handleOpen}
      >
        <div
          className="w-[90%] md:w-[40%]  p-2 px-5 md:px-7 rounded shadow-lg bg-white"
          onClick={(e) => e.stopPropagation()}
        >
          <h1 className="px-2 py-2 w-full text-center font-semibold">
            Add A Book
          </h1>

          <div className="w-full py-3 ">
            {inPutField?.map((elm, i) => (
              <div className="w-full space-y-1" key={i}>
                <label htmlFor="" className="text-sm capitalize">
                  {elm.name} :
                </label>

                <div className="w-full border rounded">
                  <input
                    value={elm.value}
                    type={elm.type}
                    className="w-full py-2 px-2 rounded outline-none"
                    placeholder={elm.placeholder}
                    name={elm.name}
                    onChange={handleChange}
                  />
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => handlePost(data?.id)}
            className="w-full text-center bg-sky-500 text-white py-2  font-semibold my-4"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommonModel;
