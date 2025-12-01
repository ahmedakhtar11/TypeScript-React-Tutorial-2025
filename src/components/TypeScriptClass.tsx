import React, { useState, useEffect } from "react";

type User = {
  user: {
    name: string;
    email?: string;
    age: number;
    isLoggedIn: boolean;
  };
  meta: Record<string, unknown>;
};

type UserProps = {
  area: string;
};

class UserComponent extends React.Component<UserProps, User> {
  static defaultProps = {
    area: "chicago",
  };
  constructor(props: UserProps) {
    super(props);
    this.state = {
      user: {
        name: "diana",
        age: 32,
        isLoggedIn: true,
      },
      meta: {
        role: "editor",
        subscribed: true,
      },
    };
  }

  componentDidMount(): void {
    const metaObject = {
      role: "admin",
      subscribed: false,
    };

    const fetchedUser = {
      name: "sonya blade",
      email: "sonya@gmail.com",
      age: 72,
      isLoggedIn: true,
    };
    this.setState({ ...this.state, user: fetchedUser });
    this.setState({ meta: metaObject });
  }

  getNameOfUser = (u: User): string => {
    return u.user.name;
  };

  render(): React.ReactNode {
    let nameOfUser: string = this.state.user.name;

    return (
      <div>
        Hello World <br />
        Name: {this.state.user.name}
        <br />
        Email: {this.state.user.email}
        <br />
        <h3>Meta Info</h3>
        Role: {this.state.meta.role as string}
      </div>
    );
  }
}