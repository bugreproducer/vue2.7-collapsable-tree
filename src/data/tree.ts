import type { TTreeExtendable } from "@/types/components/tree";

export const data : TTreeExtendable = [
  {
    "id": 1,
    "created_at": "2023-01-20 16:05:09",
    "updated_at": "2023-01-20 16:05:09",
    "parent_id": null,
    "identifier": "main_1",
    "display_name": "Main category",
    "sort_order": null,
    "is_active": true,
    "children": [
      {
        "id": 2,
        "created_at": "2023-01-20 16:07:21",
        "updated_at": "2023-05-09 12:50:59",
        "parent_id": 1,
        "identifier": "some_subcat",
        "display_name": "Some subcategory",
        "sort_order": 1,
        "is_active": true,
        "label": "Some subcategory (some_subcat)",
        "link": {
          "location": "/pim/category/2",
          "ariaLabel": "Some subcategory"
        }
      },
      {
        "id": 3,
        "created_at": "2023-01-24 09:11:33",
        "updated_at": "2023-05-09 12:50:59",
        "parent_id": 1,
        "identifier": "brands",
        "display_name": "Brands",
        "sort_order": 2,
        "is_active": true,
        "children": [
          {
            "id": 5,
            "created_at": "2023-01-24 09:12:22",
            "updated_at": "2023-05-09 13:16:26",
            "parent_id": 3,
            "identifier": "acme_inc",
            "display_name": "Acme, Inc.",
            "sort_order": 3,
            "is_active": true,
            "label": "Acme, Inc. (acme_inc)",
            "link": {
              "location": "/pim/category/5",
              "ariaLabel": "Acme, Inc."
            }
          },
          {
            "id": 6,
            "created_at": "2023-01-24 09:12:22",
            "updated_at": "2023-05-09 13:16:26",
            "parent_id": 3,
            "identifier": "golden_sun",
            "display_name": "Golden sun",
            "sort_order": 1,
            "is_active": true,
            "label": "Golden sun (golden_sun)",
            "link": {
              "location": "/pim/category/6",
              "ariaLabel": "Categorie Golden Sun"
            }
          },
          {
            "id": 7,
            "created_at": "2023-01-24 09:12:23",
            "updated_at": "2023-05-09 13:16:26",
            "parent_id": 3,
            "identifier": "silver_moon",
            "display_name": "Silver moon",
            "sort_order": 2,
            "is_active": true,
            "label": "Silver moon (silver_moon)",
            "link": {
              "location": "/pim/category/7",
              "ariaLabel": "Category Silver moon"
            }
          },
        ],
        "label": "Brands (brands)",
        "link": {
          "location": "/pim/category/3",
          "ariaLabel": "Brands"
        }
      },
      {
        "id": 8,
        "created_at": "2023-01-24 09:12:54",
        "updated_at": "2023-05-09 12:50:59",
        "parent_id": 1,
        "identifier": "cat_dsedf73v",
        "display_name": "Category with children",
        "sort_order": 3,
        "is_active": true,
        "children": [
          {
            "id": 85,
            "created_at": "2023-05-16 09:15:37",
            "updated_at": "2023-05-16 09:15:37",
            "parent_id": 8,
            "identifier": "cat_d7s6emsb4uqw9msifedo9",
            "display_name": "Cat 123",
            "sort_order": 0,
            "is_active": true,
            "label": "Cat 123 (cat_d7s6emsb4uqw9msifedo9)",
            "link": {
              "location": "/pim/category/85",
              "ariaLabel": "Categorie 123"
            }
          }
        ],
        "label": "Category with children (cat_dsedf73v)",
        "link": {
          "location": "/pim/category/8",
          "ariaLabel": "Category with children "
        }
      },
      {
        "id": 65,
        "created_at": "2023-05-09 14:47:48",
        "updated_at": "2023-05-09 14:47:48",
        "parent_id": 1,
        "identifier": "xxx",
        "display_name": "Another subcategory",
        "sort_order": null,
        "is_active": true,
        "children": [
          {
            "id": 68,
            "created_at": "2023-05-09 15:12:45",
            "updated_at": "2023-05-12 15:41:05",
            "parent_id": 65,
            "identifier": "cat_di3jqs5b7aa",
            "display_name": "Another item of subcategory",
            "sort_order": 1,
            "is_active": true,
            "label": "Another item of subcategory (cat_di3jqs5b7aa)",
            "link": {
              "location": "/pim/category/68",
              "ariaLabel": "Another item of subcategory"
            }
          },
          {
            "id": 69,
            "created_at": "2023-05-11 11:44:38",
            "updated_at": "2023-05-12 15:44:11",
            "parent_id": 65,
            "identifier": "subcat_xr2h2fn8qfnf7xyx6ton",
            "display_name": "Subcat of subcat 1",
            "sort_order": 2,
            "is_active": true,
            "children": [
              {
                "id": 70,
                "created_at": "2023-05-11 11:47:13",
                "updated_at": "2023-05-12 17:11:11",
                "parent_id": 69,
                "identifier": "subcat_42tg218p74rixpdve7mye",
                "display_name": "Subcat of subcat 2",
                "sort_order": 4,
                "is_active": true,
                "label": "Subcat of subcat 2 (subcat_42tg218p74rixpdve7mye)",
                "link": {
                  "location": "/pim/category/70",
                  "ariaLabel": "Subcat of subcat 2"
                }
              },
              {
                "id": 71,
                "created_at": "2023-05-11 12:59:03",
                "updated_at": "2023-05-11 12:59:03",
                "parent_id": 69,
                "identifier": "subcat_ykixxwyhlhnc56cvnzbgr6",
                "display_name": "Subcat 2 of subcat 2",
                "sort_order": 0,
                "is_active": true,
                "label": "Subcat 2 of subcat 2 (subcat_ykixxwyhlhnc56cvnzbgr6)",
                "link": {
                  "location": "/pim/category/71",
                  "ariaLabel": "Subcat of subcat 3"
                }
              }
            ],
            "label": "Subcat 2 (subcat_xr2h2fn8qfnf7xyx6ton)",
            "link": {
              "location": "/pim/category/69",
              "ariaLabel": "Categorie Subcat 2"
            }
          }
        ],
        "label": "Another subcategory (xxx)",
        "link": {
          "location": "/pim/category/65",
          "ariaLabel": "Categorie Producten van A. Vogel"
        }
      },
    ],
    "label": "Main category (main_1)",
    "link": {
      "location": "/pim/category/1",
      "ariaLabel": "Categorie Main"
    }
  }
];

export default data;