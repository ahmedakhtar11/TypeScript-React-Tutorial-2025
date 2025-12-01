import React from "react";
import { useState, useEffect } from "react";

type User = {
  name: string;
  email: string;
  isLoggedIn: boolean;
  age: number;
  hobbies: {
    id: number;
    title: string;
  };
  meta: Record<string, unknown>
};

type UserProps = {
  area: string;
};

const initialForm = {
  name: "Johnny",
  email: "john@test.com",
  age: 23,
  isLoggedIn: true,
  hobbies: {
    id: 2,
    title: "fishing",
  },
  meta: {
  favoriteFood: 'pizza'
  }
};

const UserComponent: React.FC<UserProps> = ({ area = "chicago" }) => {
  const [user, setUser] = useState<User>(initialForm);

  useEffect(() => {
    const fetchedUser = {
      name: "kano",
      email: "kano@yahoo.com",
      age: 12,
      isLoggedIn: false,
      hobbies: {
        id: 4,
        title: "logging",
      },
      meta: {
      favoriteFood: 'Pasta'
    }
}
    setUser(fetchedUser);
  }, [user]);

  return (
    <div>
      Testing User Component
      <br />
      User Name: {user.name}
      <br />
      User Email: {user.email}
      <br />
      User Area: {area}
      <br/>
      User Favorite Food: {user.meta.favoriteFood as string}
    </div>
  );
};