import React, { useState } from "react";
import EditUserModal from "./edit-user.component";

function UserCardComponent({ userInfo, allUsers, handleDelete, setUsers }) {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [showLike, setShowLike] = useState(false);

  const handleModal = (event, id) => {
    event.preventDefault();
    let userFilteredData = allUsers.filter((data) => data.id === id);
    setModalData(userFilteredData);
    setShowModal(true);
  };

  const handleSave = (event, modalUpdatedInfo) => {
    event.preventDefault();
    let userFilteredData = allUsers.filter(
      (data) => data.id !== modalUpdatedInfo.id
    );
    userFilteredData.push(modalUpdatedInfo);
    userFilteredData.sort((a, b) => a.id - b.id);
    setUsers(userFilteredData);
    setShowModal(false);
  };

  const handleLike = (event, id) => {
    event.preventDefault();
    setShowLike(!showLike);
  };

  return (
    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-12 lg:w-1/3">
      <article className="overflow-hidden rounded-lg shadow-lg">
        <span>
          <img
            alt="Placeholder"
            className="block h-40 w-full"
            src={`https://avatars.dicebear.com/v2/avataaars/${userInfo.username}.svg?options[mood][]=happy`}
          />
        </span>
        <header className="flex flex-col flex-wrap leading-tight p-2 md:p-4">
          <h1 className="text-base mb-2">
            <span className="no-underline text-black">{userInfo.name}</span>
          </h1>
          <h3 className="text-base">
            <span className="no-underline text-gray-600">
              <i className="fa fa-envelope mr-4" aria-hidden="true"></i>
              {userInfo.email}
            </span>
          </h3>
          <h3 className="text-base">
            <span className="no-underline text-gray-600">
              <i className="fa fa-phone mr-4" aria-hidden="true"></i>
              {userInfo.phone}
            </span>
          </h3>
          <h3 className="text-base">
            <span className="no-underline text-gray-600">
              <i className="fa fa-globe mr-4" aria-hidden="true"></i>
              http://{userInfo.website}
            </span>
          </h3>
        </header>
        <footer className="flex items-center bg-gray-200 justify-between leading-none p-2 md:p-4">
          <span className="no-underline bg-gray-200 fill-current ">
            <button
              className="focus:outline-none"
              onClick={(e) => handleLike(e, userInfo.id)}
            >
              <span className="hidden">Like</span>
              <i
                className={
                  showLike
                    ? "fa fa-heart text-red-700"
                    : "fa fa-heart text-gray-500 hover:text-red-700"
                }
              ></i>
            </button>
          </span>
          <span className="no-underline text-grey-darker hover:text-red-dark">
            <button
              className="bg-black-500 hover:bg-grey-700 focus:outline-none"
              onClick={(e) => handleModal(e, userInfo.id)}
            >
              <span className="hidden">Edit</span>
              <i className="fa fa-edit"></i>
            </button>
          </span>
          <span className="no-underline text-grey-darker hover:text-red-dark">
            <button
              className="bg-black-500 hover:bg-grey-700 focus:outline-none"
              onClick={(e) => handleDelete(e, userInfo.id)}
            >
              <span className="hidden">Delete</span>
              <i className="fa fa-trash"></i>
            </button>
          </span>
        </footer>
      </article>
      {showModal ? (
        <EditUserModal
          setShowModal={setShowModal}
          modalData={modalData}
          handleSave={handleSave}
        />
      ) : null}
    </div>
  );
}

export default UserCardComponent;
