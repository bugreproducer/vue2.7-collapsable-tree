import { TLink } from '@/types/general/link';

export interface ITree {
  label: string;
  link?: TLink;
  children?: (ITree & Record<string, unknown>)[];
};

export interface ITreeExtendable extends Record<string, unknown> {
  children?: (ITree & Record<string, unknown>)[];
}

export type TTree = ITree[];
export type TTreeExtendable = ITreeExtendable[];

export const exampleTree: TTreeExtendable = [
  {
    "label": "Projects",
    "foo": "bar",
    "children": [
      {
        "label": "Frontend",
        "link": {
          "location": "/frontend",
          "ariaLabel": "Frontend",
          "target": "_self",
          "rel": "nofollow"
        },
        "children": [
          {
            "label": "Vue",
            "children": [
              {
                "label": "Nuxt"
              }
            ]
          },
          {
            "label": "React",
            "children": [
              {
                "label": "Next"
              }
            ]
          },
          {
            "label": "Angular"
          }
        ]
      },
      {
        "label": "Backend"
      }
    ]
  },
  {
    "label": "About",
  }
];