import { useState } from "react";
import { Button, Input, InputButton, Loading, Notify } from "../components";
import Link from "next/link";

export default function ChangePassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [curr, setCurr] = useState(0);
  const [notification, setNotification] = useState();
  const [loading, setLoading] = useState(false);

  const api = "http://192.168.248.32";

  const clear = () => {
    if (curr === 0) {
      setOldPassword("");
    } else {
      setNewPassword("");
    }
  };

  const reduce = () => {
    if (curr === 0) {
      setOldPassword(oldPassword.substring(0, oldPassword.length - 1));
    } else {
      setNewPassword(newPassword.substring(0, newPassword.length - 1));
    }
  };

  const insert = (value) => {
    if (curr === 0) {
      if (oldPassword.length < 4) {
        setOldPassword(oldPassword + value);
      }
    } else {
      if (newPassword.length < 4) {
        setNewPassword(newPassword + value);
      }
    }
  };

  const changePassword = async () =>{
    try {
        setLoading(true);
        const response = await fetch(`${api}/changePassword`, {
          method: "POST",
          body: `${oldPassword},${newPassword}`,
        });
  
        const message = await response.text();
        setLoading(false);
        setNotification({ danger: response.status !== 200, text: message });
      } catch (error) {
        setLoading(false);
        setNotification({ danger: true, text: "Device Offline" });
      }
  }

  return (
    <div className="relative">
      {loading && <Loading />}
      <main className="flex flex-col text-center p-5 w-[100vw] h-[100vh]">
        <div className="bg-blue-600 p-5 rounded rounded-2xl w-fit mx-auto md:mt-2">
          <h1 className="text-2xl font-bold text-white">
            Wifi Controlled Remote Door Lock System
          </h1>
        </div>
        <div className="flex flex-col md:flex-row md:gap-6 mx-auto md:my-auto align-middle">
          <div>
            <div
              className={`${
                curr === 0 ? "border-blue-600 border-2" : ""
              } w-[300px] bg-blue-100 rounded rounded-2xl mx-2 my-5 p-1`}
              onClick={() => {
                setCurr(0);
              }}
            >
              <p className="text-xl text-blue-600 font-semibold mt-2">
                Enter Old Password:
              </p>
              <Input value={oldPassword} />
            </div>
            <div
              className={`${
                curr === 1 ? "border-blue-600 border-2" : ""
              } w-[300px] bg-blue-100 rounded rounded-2xl mx-2 my-5 p-1`}
              onClick={() => {
                setCurr(1);
              }}
            >
              <p className="text-xl text-blue-600 font-semibold mt-2">
                Enter New Password:
              </p>
              <Input value={newPassword} />
            </div>
            <div className="w-fit mx-auto m-1">
              <Button onClick={changePassword}>Change Password</Button>
            </div>
          </div>
          <div className="w-[300px] bg-blue-100 rounded rounded-2xl mx-auto my-4 p-2">
            <div className="flex flex-wrap justify-center">
              <InputButton onClick={insert}>1</InputButton>
              <InputButton onClick={insert}>2</InputButton>
              <InputButton onClick={insert}>3</InputButton>
              <InputButton onClick={insert}>4</InputButton>
              <InputButton onClick={insert}>5</InputButton>
              <InputButton onClick={insert}>6</InputButton>
              <InputButton onClick={insert}>7</InputButton>
              <InputButton onClick={insert}>8</InputButton>
              <InputButton onClick={insert}>9</InputButton>
              <InputButton negative onClick={clear}>
                C
              </InputButton>
              <InputButton onClick={insert}>0</InputButton>
              <InputButton negative onClick={reduce}>
                X
              </InputButton>
            </div>
            <Link href="/">
              <button className="text-blue-600 underline m-2">
                Back to Home
              </button>
            </Link>
          </div>
        </div>

        <Notify notification={notification} setNotification={setNotification} />
      </main>
    </div>
  );
}
