import { useState } from "react";
import { Button, Input, InputButton, Loading, Notify } from "../components";
import Link from "next/link";

export default function Home() {
  const [password, setPassword] = useState("");
  const [notification, setNotification] = useState();
  const [loading, setLoading] = useState(false);

  const api = "http://192.168.248.32";

  const clear = () => {
    setPassword("");
  };

  const reduce = () => {
    setPassword(password.substring(0, password.length - 1));
  };

  const insert = (value) => {
    if (password.length < 4) {
      setPassword(password + value);
    }
  };

  const openDoor = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${api}/open`, {
        method: "POST",
        body: password,
      });

      const message = await response.text();
      setLoading(false);
      setNotification({ danger: response.status !== 200, text: message });
    } catch (error) {
      setLoading(false);
      setNotification({ danger: true, text: "Device Offline" });
    }
  };

  const closeDoor = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${api}/close`, {
        method: "POST",
      });

      const message = await response.text();
      setLoading(false);
      setNotification({ danger: response.status !== 200, text: message });
    } catch (error) {
      setLoading(false);
      setNotification({ danger: true, text: "Device Offline" });
    }
  };

  return (
    <div className="relative">
      {loading && <Loading />}
      <main className="flex flex-col text-center p-5">
        <div className="bg-blue-600 p-5 rounded rounded-2xl w-fit mx-auto">
          <h1 className="text-2xl font-bold text-white">
            Wifi Controlled Remote Door Lock System
          </h1>
        </div>
        <div className="w-[300px] mx-auto mt-4 flex justify-evenly">
          <Button onClick={openDoor}>Open Door</Button>
          <Button onClick={closeDoor}>Close Door</Button>
        </div>
        <div className="w-[300px] bg-blue-100 rounded rounded-2xl mx-auto mt-4 p-2">
          <Input value={password} />
          <div className="h-[2px] bg-blue-600 my-2 mx-4" />
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
          <Link href="/changePassword"><button className="text-blue-600 underline m-2">Change Password</button></Link>
        </div>
        <Notify notification={notification} setNotification={setNotification} />
      </main>
    </div>
  );
}
