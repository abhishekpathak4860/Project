import React, { useState } from "react";
import { OrganizationChart } from "primereact/organizationchart";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

// const nodeTemplate = (node) => {
//   if (node.type == "person") {
//     return (
//       <div className="flex flex-col w-[100%]">
//         <div className="flex flex-col items-center w-[50px]">
//           <img src={node.data.image} alt="" className="mb-3 w-full" />
//           <span className="font-bold mb-2">{node.data.name}</span>
//           <span className="">{node.data.title}</span>
//         </div>
//       </div>
//     );
//   }
//   return node.label;
// };

const nodeTemplate = (node) => {
  if (node.type === "person") {
    return (
      <div className=" flex flex-col items-center justify-center p-2 border-2 border-red-500">
        <img
          src={node.data.image}
          alt="Profile"
          className="mb-2 w-16 h-16 rounded-full"
        />
        <span className="font-bold text-sm text-center">{node.data.name}</span>
        <span className="text-xs text-center">{node.data.title}</span>
      </div>
    );
  }
  return <span>{node.label}</span>;
};

export default function Lineage() {
  const [data] = useState([
    {
      expanded: true,
      className:
        "!bg-secondary-color border !border-main-bg  rounded-xl !text-black",
      type: "person",
      data: {
        image: "https://i.pravatar.cc/150?img=12",
        name: "Alok sir",
        title: "CEO",
      },
      children: [
        {
          expanded: true,
          type: "person",
          className:
            "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
          data: {
            image: "https://i.pravatar.cc/150?img=12",
            name: "Abhishek sir",
            title: "CFO",
          },
          children: [
            {
              expanded: true,
              type: "person",
              className:
                "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
              data: {
                image: "https://i.pravatar.cc/150?img=12",
                name: "Abhishek sir 1",
                title: "Technical development Intern",
              },
            },
            {
              expanded: true,
              type: "person",
              className:
                "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
              data: {
                image: "https://i.pravatar.cc/150?img=12",
                name: "Abhishek sir 2",
                title: "Technical development Intern",
              },
            },
            {
              expanded: true,
              type: "person",
              className:
                "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
              data: {
                image: "https://i.pravatar.cc/150?img=12",
                name: "Abhishek sir 3",
                title: "Technical development Intern",
              },
              children: [
                {
                  expanded: true,
                  type: "person",
                  className:
                    "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
                  data: {
                    image: "https://i.pravatar.cc/150?img=12",
                    name: "Abhishek sir 3-1",
                    title: "Technical development Intern",
                  },
                  children: [
                    {
                      expanded: true,
                      type: "person",
                      className:
                        "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
                      data: {
                        image: "https://i.pravatar.cc/150?img=12",
                        name: "Abhishek sir 3-1(1)",
                        title: "Technical development Intern",
                      },
                      children: [
                        {
                          expanded: true,
                          type: "person",
                          className:
                            "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
                          data: {
                            image: "https://i.pravatar.cc/150?img=12",
                            name: "Abhishek sir 3-1(1)(1)",
                            title: "Technical development Intern",
                          },
                          children: [
                            {
                              expanded: true,
                              type: "person",
                              className:
                                "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
                              data: {
                                image: "https://i.pravatar.cc/150?img=12",
                                name: "Abhishek sir 3-1(1)(1)(1)",
                                title: "Technical development Intern",
                              },
                            },
                            {
                              expanded: true,
                              type: "person",
                              className:
                                "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
                              data: {
                                image: "https://i.pravatar.cc/150?img=12",
                                name: "Abhishek sir 3-1(1)(1)(2)",
                                title: "Technical development Intern",
                              },
                            },
                          ],
                        },
                        {
                          expanded: true,
                          type: "person",
                          className:
                            "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
                          data: {
                            image: "https://i.pravatar.cc/150?img=12",
                            name: "Abhishek sir 3-1(1)(2)",
                            title: "Technical development Intern",
                          },
                        },
                      ],
                    },
                    {
                      expanded: true,
                      type: "person",
                      className:
                        "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
                      data: {
                        image: "https://i.pravatar.cc/150?img=12",
                        name: "Abhishek sir 3-1(2)",
                        title: "Technical development Intern",
                      },
                    },
                  ],
                },
              ],
            },
            {
              expanded: true,
              type: "person",
              className:
                "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
              data: {
                image: "https://i.pravatar.cc/150?img=12",
                name: "Abhishek sir 4",
                title: "Technical development Intern",
              },
            },
          ],
        },
        {
          expanded: true,
          type: "person",
          className:
            "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
          data: {
            image: "https://i.pravatar.cc/150?img=12",
            name: "Ashutosh Sir",
            title: "CTO",
          },
        },
        {
          expanded: true,
          type: "person",
          className:
            "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
          data: {
            image: "https://i.pravatar.cc/150?img=12",
            name: "Abhishek sir",
            title: "CFO",
          },
          children: [
            {
              expanded: true,
              type: "person",
              className:
                "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
              data: {
                image: "https://i.pravatar.cc/150?img=12",
                name: "Avanindra1",
                title: "Technical development Intern",
              },
              children: [
                {
                  expanded: true,
                  type: "person",
                  className:
                    "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
                  data: {
                    image: "https://i.pravatar.cc/150?img=12",
                    name: "Avanindra2",
                    title: "Technical development Intern",
                  },
                  children: [
                    {
                      expanded: true,
                      type: "person",
                      className:
                        "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
                      data: {
                        image: "https://i.pravatar.cc/150?img=12",
                        name: "Avanindra5",
                        title: "Technical development Intern",
                      },
                      children: [
                        {
                          expanded: true,
                          type: "person",
                          className:
                            "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
                          data: {
                            image: "https://i.pravatar.cc/150?img=12",
                            name: "Avanindra7",
                            title: "Technical development Intern",
                          },
                          children: [
                            {
                              expanded: true,
                              type: "person",
                              className:
                                "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
                              data: {
                                image: "https://i.pravatar.cc/150?img=12",
                                name: "Avanindra9",
                                title: "Technical development Intern",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              expanded: true,
              type: "person",
              className:
                "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
              data: {
                image: "https://i.pravatar.cc/150?img=12",
                name: "Avanindra3",
                title: "Technical development Intern",
              },
              children: [
                {
                  expanded: true,
                  type: "person",
                  className:
                    "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
                  data: {
                    image: "https://i.pravatar.cc/150?img=12",
                    name: "Avanindra4",
                    title: "Technical development Intern",
                  },
                  children: [
                    {
                      expanded: true,
                      type: "person",
                      className:
                        "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
                      data: {
                        image: "https://i.pravatar.cc/150?img=12",
                        name: "Avanindra6",
                        title: "Technical development Intern",
                      },
                      children: [
                        {
                          expanded: true,
                          type: "person",
                          className:
                            "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
                          data: {
                            image: "https://i.pravatar.cc/150?img=12",
                            name: "Avanindra8",
                            title: "Technical development Intern",
                          },
                          children: [
                            {
                              expanded: true,
                              type: "person",
                              className:
                                "!bg-secondary-color border !border-main-bg  rounded-xl  !text-main-bg",
                              data: {
                                image: "https://i.pravatar.cc/150?img=12",
                                name: "Avanindra10",
                                title: "Technical development Intern",
                              },
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  return (
    // <div className=" w-full min-h-screen p-4 bg-white ">
    //   <div className="flex justify-center min-w-[600px]">
    //     <OrganizationChart
    //       className=""
    //       value={data}
    //       nodeTemplate={nodeTemplate}
    //     ></OrganizationChart>
    //   </div>
    // </div>
    <div className="w-[50%]  mx-auto p-4 bg-white border-2 border-green-500">
      <div className="flex justify-center  border-2 border-yellow-500 overflow-x-auto max-w-full">
        <OrganizationChart value={data} nodeTemplate={nodeTemplate} />
      </div>
    </div>
  );
}
