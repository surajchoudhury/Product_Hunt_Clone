import React from "react";
import MainLeft from "./mainleft";
import MainRight from "./mainright";

const Main = () => {
  return (
    <div className="wrapper">
      <main className="main">
        <main className="main_left_container">
          <div className="popular_container">
            <p className="popular">Popular this month</p>
            <div>
              <span className="new"></span>
              <span className="new"></span>
            </div>
          </div>
          <MainLeft
            image="https://ph-files.imgix.net/92f47709-ee31-4a20-8815-2ea52e4a13c0?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
            text1="Basecamp Personal"
            text2="Manage all your small projects for free"
            comments="126"
            rank="2531"
            device="Android"
          />
          <MainLeft
            image="https://ph-files.imgix.net/d437a3bc-8c67-444b-a0df-9cdcdfeb648e?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
            text1="Growth.Design case Studies"
            text2="Product tips in a comic book format"
            comments="215"
            rank="1754"
            device="User Experience"
          />
          <MainLeft
            image="https://ph-files.imgix.net/26ee64be-3601-4d8e-ae32-63396b016101?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2"
            text1="Tesla Cybertruck"
            text2="A futuristic electric pickup truck from Tesla ⚡️"
            comments="112"
            rank="1571"
            device="Cars"
          />
          <div className="popular_container">
            <p className="popular">Yesterday</p>
            <div className="new_container">
              <span className="new">POPULAR</span>
              <span className="new">NEWEST</span>
            </div>
          </div>
          {[
            {
              image:
                "https://ph-files.imgix.net/dc01bcb4-4858-4153-88e4-45984529d4aa?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2",
              text1: "CodersRank",
              text2: "The ultimte profile for evelopers",
              comments: "95",
              rank: "251",
              device: "Education"
            },

            {
              image:
                "https://ph-files.imgix.net/080a9186-bbca-48ed-b9c4-508bf6b8496b?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2",
              text1: "Pink-Out Extension",
              text2: "Un-Pink the web, protect yourself from Trolls  🤦",
              comments: "33",
              rank: "128",
              device: "Chrome Extensions"
            },
            {
              image:
                "https://ph-files.imgix.net/dc9e59ec-104d-4108-8f93-52b4e593e032?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2",
              text1: "Halfdollar",
              text2: "AFree and elaborate spreadsheet budgeting",
              comments: "18",
              rank: "191",
              device: "Productivity"
            },

            {
              image:
                "https://ph-files.imgix.net/2588ed4d-46a6-43cc-91b5-f5fe7384a063?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=2 2x, https://ph-files.imgix.net/2588ed4d-46a6-43cc-91b5-f5fe7384a063?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop&dpr=3 3x",
              text1: "Exploding Topics",
              text2: "Find proven topics before they take off.",
              comments: "81",
              rank: "251",
              device: "Web App"
            },

            {
              image:
                "https://ph-files.imgix.net/295148b9-dea7-497c-b6c2-451f8c5e48db?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
              text1: "Hyperise",
              text2: "2X your email CTR with dynamic personalised images.",
              comments: "37",
              rank: "128",
              device: "Chrome Extensions"
            }
          ].map(profile => (
            <MainLeft {...profile} />
          ))}
        </main>
        <main className="main_right_container">
          <MainRight />
        </main>
      </main>
    </div>
  );
};

export default Main;
