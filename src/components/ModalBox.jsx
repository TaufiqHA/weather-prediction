import React from "react";

const ModalBox = () => {
  return (
    <dialog id="my_modal_1" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Report!</h3>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">What is your email?</span>
          </label>
          <input
            type="email"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Report a bug here</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="type here"
          ></textarea>
        </div>
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Send</button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default ModalBox;
