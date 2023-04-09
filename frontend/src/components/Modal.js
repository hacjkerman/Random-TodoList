import React, { useState, useEffect } from "react";

export default function Modal(props) {
  const [showModal, setShowModal] = useState(false);
  const [extendModal, setExtendModal] = useState(false);
  const [extendedTime, setExtendedTime] = useState("");

  useEffect(() => {
    setShowModal(props.finished);
  }, [props.finished]);

  const handleTimeExtension = (time) => {
    setExtendedTime(time.target.value);
  };

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Timer Complete!</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setShowModal(false);
                      props.setFinished(false);
                      props.setCurrentTodo({
                        todo: "",
                        time: "0",
                      });
                      return;
                    }}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    To assigned time of{" "}
                    {Math.floor((props.todo.time % 3600) / 60)} minutes has
                    finished! Do you want to extend the current Todo Item:{" "}
                    {props.todo.todo}? If you are finished with the todo item
                    please press the finished button!
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setExtendModal(true);
                      props.setFinished(false);
                      return;
                    }}
                  >
                    Extend Time
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      props.setFinished(false);
                      props.setCurrentTodo({
                        todo: "",
                        time: "0",
                      });
                      return;
                    }}
                  >
                    Finished!
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {extendModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Extend Timer</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => {
                      setShowModal(false);
                      props.setFinished(false);
                      return;
                    }}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-slate-500 text-lg leading-relaxed">
                    How many more minutes would you like to extend for the
                    current Todo Item: {props.todo.todo}?
                  </p>
                  <input
                    className="border border-gray-300 rounded-lg py-2 px-3 mr-2 flex-1"
                    id="extend-time"
                    type="text"
                    placeholder="Extend time (minutes)"
                    value={extendedTime}
                    onChange={handleTimeExtension}
                  />
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                      setShowModal(false);
                      setExtendModal(false);
                      props.setFinished(false);
                      props.setCurrentTodo({
                        todo: props.todo.todo,
                        time: extendedTime * 60,
                      });
                      return;
                    }}
                  >
                    Extend Time
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
