const lessonData = {
    "lessons": [
        {
            "id": "lesson1_container",
            "children": [
              { "tag": "a", "id": "back_to_concept", "href": "#", "class": "back-button", "text": "&larr;Go Back" },
              { "tag": "h2", "class": "title", "id": "Lesson1", "text": "Lesson One" },
              {
                "class": "content",
                "id": "lesson_content",
                "children": [
                  { "tag": "h1", "id": "concept_title", "children": [{ "tag": "b", "text": "What is Money?" }] },
                  {
                    "class": "lesson",
                    "children": [
                      { "tag": "p", "text": "<lesson1_paragraph>" }
                    ]
                  }
                ]
              },
              { "tag": "button", "class": "button", "id": "next_button2", "text": "Next" }
            ]
          },
          {
            "id": "lesson2_container",
            "children": [
              { "tag": "a", "id": "back_to_concept1", "href": "#", "class": "back-button", "text": "&larr; Back to Lesson 1" },
              { "tag": "h2", "class": "title", "id": "Lesson2", "text": "Lesson Two" },
              {
                "class": "content",
                "id": "lesson_content",
                "children": [
                  { "tag": "h1", "id": "concept_title", "children": [{ "tag": "b", "text": "Why we save" }] },
                  {
                    "class": "lesson",
                    "children": [
                      { "tag": "p", "text": "<lesson2_paragraph>" }
                    ]
                  }
                ]
              },
              { "tag": "button", "class": "button", "id": "next_button3", "text": "Next" }
            ]
          },
          {
            "id": "lesson3_container",
            "children": [
              { "tag": "a", "id": "back_to_concept2", "href": "#", "class": "back-button", "text": "&larr; Back to Lesson 2" },
              { "tag": "h2", "class": "title", "id": "Lesson3", "text": "Lesson Third" },
              {
                "class": "content",
                "id": "lesson_content",
                "children": [
                  { "tag": "h1", "id": "concept_title", "children": [{ "tag": "b", "text": "A good day for money" }] },
                  {
                    "class": "lesson",
                    "children": [
                      { "tag": "p", "text": "<lesson3_paragraph>" }
                    ]
                  }
                ]
              },
              { "tag": "button", "class": "button", "id": "next_button4", "text": "Next" }
            ]
          },
          {
            "id": "lesson4_container",
            "children": [
              { "tag": "a", "id": "back_to_concept3", "href": "#", "class": "back-button", "text": "&larr; Back to Lesson 3" },
              { "tag": "h2", "class": "title", "id": "Lesson4", "text": "Lesson Four" },
              {
                "class": "content",
                "id": "lesson_content",
                "children": [
                  { "tag": "h1", "id": "concept_title", "children": [{ "tag": "b", "text": "Saving makes us wait" }] },
                  {
                    "class": "lesson",
                    "children": [
                      { "tag": "p", "text": "<lesson4_paragraph>" }
                    ]
                  }
                ]
              },
              { "tag": "button", "class": "button", "id": "next_button5", "text": "Next" }
            ]
          },
    ]
};

export default lessonData;
