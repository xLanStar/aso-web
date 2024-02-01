const data = ref({
    asoId: "123",
    asoName: "test",
    pages: [
      {
        name: "午安，起床了嗎?",
        elements: [
          {
            type: ElementType.Text,
            value: "午安，起床了嗎?",
            x: 0.5,
            y: 0.4,
            style: {
              fontSize: "36px",
            },
          },
          {
            type: ElementType.Button,
            value: "起床了",
            x: 0.3,
            y: 0.6,
            event: {
              click: [
                {
                  type: ElementEventype.ShowPage,
                  value: 1,
                },
              ],
            },
          },
          {
            type: ElementType.Button,
            value: "不想起床",
            x: 0.7,
            y: 0.6,
            event: {
              click: [
                {
                  type: ElementEventype.MoveRandom,
                  // count: 3,
                  // break: true,
                },
                {
                  type: ElementEventype.ShowPage,
                  value: 2,
                },
              ],
            },
          },
          {
            type: ElementType.Button,
            value: "為什麼要告訴你",
            x: 0.5,
            y: 0.7,
            event: {
              click: [
                {
                  type: ElementEventype.Diving,
                  // count: 3,
                  // break: true,
                },
                {
                  type: ElementEventype.ShowPage,
                  value: 4,
                },
              ],
            },
          },
        ],
      },
      {
        name: "新的一天，你要做什麼呢?",
        elements: [
          {
            type: ElementType.Text,
            value: "新的一天，你要做什麼呢?",
            x: 0.5,
            y: 0.4,
            style: {
              fontSize: "36px",
            },
          },
          {
            type: ElementType.Button,
            value: "家教",
            x: 0.3,
            y: 0.6,
            event: {
              click: [
                {
                  type: ElementEventype.ShowPage,
                  value: 0,
                },
              ],
            },
          },
          {
            type: ElementType.Button,
            value: "No",
            x: 0.7,
            y: 0.6,
            event: {
              mouseover: [
                {
                  type: ElementEventype.MoveRandom,
                },
              ],
            },
          },
        ],
      },
      {
        name: "很好，多睡一點，每天都是有精神的一天",
        elements: [
          {
            type: ElementType.Text,
            value: "很好，多睡一點，每天都是有精神的一天",
            x: 0.5,
            y: 0.4,
            style: {
              fontSize: "36px",
            },
          },
          {
            type: ElementType.Button,
            value: "晚安88",
            x: 0.3,
            y: 0.6,
            event: {
              click: [
                {
                  type: ElementEventype.ShowPage,
                  value: 3,
                },
              ],
            },
          },
          {
            type: ElementType.Button,
            value: "開玩笑的啦",
            x: 0.7,
            y: 0.6,
            event: {
              mouseover: [
                {
                  type: ElementEventype.MoveRandom,
                },
              ],
            },
          },
        ],
      },
      {
        name: "祝你有個美夢，睡醒後一切噩夢不復存在",
        elements: [
          {
            type: ElementType.Image,
            x: 0.5,
            y: 0.4,
            style: {
              width: "100%",
              height: "100%",
              backgroundColor: "#222",
            },
          },
          {
            type: ElementType.Text,
            value: "祝你有個美夢，睡醒後一切噩夢不復存在",
            x: 0.5,
            y: 0.4,
            style: {
              fontSize: "36px",
              color: "white",
            },
          },
          {
            type: ElementType.Button,
            value: "我不睡了",
            x: 0.5,
            y: 0.6,
            event: {
              click: [
                {
                  type: ElementEventype.ShowPage,
                  value: 1,
                },
              ],
            },
          },
        ],
      },
      {
        name: "因為我在乎你，我想了解你",
        elements: [
          {
            type: ElementType.Image,
            x: 0.5,
            y: 0.4,
            style: {
              width: "100%",
              height: "100%",
              backgroundColor: "#fcbb9f",
            },
          },
          {
            type: ElementType.Text,
            value: "因為我在乎你，我想進入你的世界",
            x: 0.5,
            y: 0.4,
            style: {
              fontSize: "36px",
              color: "white",
            },
          },
          {
            type: ElementType.Button,
            value: "我也在乎你",
            x: 0.5,
            y: 0.6,
            event: {
              click: [
                {
                  type: ElementEventype.ShowPage,
                  value: 5,
                },
              ],
            },
          },
          {
            type: ElementType.Button,
            value: "我不想讓你進入我的世界",
            x: 0.5,
            y: 0.7,
            event: {
              click: [
                {
                  type: ElementEventype.ShowPage,
                  value: 6,
                },
              ],
            },
          },
        ],
      },
      {
        name: "<3",
        elements: [
          {
            type: ElementType.Image,
            x: 0.5,
            y: 0.4,
            style: {
              width: "100%",
              height: "100%",
              backgroundColor: "#fcbb9f",
            },
          },
          {
            type: ElementType.Text,
            value: "<3",
            x: 0.5,
            y: 0.4,
            style: {
              fontSize: "36px",
              color: "white",
            },
          },
          {
            type: ElementType.Button,
            value: "我也希望你不再出爾反爾",
            x: 0.5,
            y: 0.7,
            event: {
              click: [
                {
                  type: ElementEventype.ShowPage,
                  value: 4,
                },
              ],
            },
          },
        ],
      },
      {
        name: "因為我不夠信任你嗎?",
        elements: [
          {
            type: ElementType.Text,
            value: "因為我不夠信任你嗎?",
            x: 0.5,
            y: 0.4,
            style: {
              fontSize: "36px",
            },
          },
          {
            type: ElementType.Button,
            value: "對",
            x: 0.3,
            y: 0.6,
            event: {
              click: [
                {
                  type: ElementEventype.ShowPage,
                  value: 7,
                },
              ],
            },
          },
          {
            type: ElementType.Button,
            value: "不對",
            x: 0.7,
            y: 0.6,
            event: {
              click: [
                {
                  type: ElementEventype.ShowPage,
                  value: 10,
                },
              ],
            },
          },
        ],
      },
      {
        name: "對不起，是我太多疑",
        elements: [
          {
            type: ElementType.Text,
            value: "對不起，是我太多疑",
            x: 0.5,
            y: 0.4,
            style: {
              fontSize: "36px",
            },
          },
          {
            type: ElementType.Button,
            value: "拜託以後不要再這樣了",
            x: 0.5,
            y: 0.6,
            event: {
              click: [
                {
                  type: ElementEventype.ShowPage,
                  value: 8,
                },
              ],
            },
          },
        ],
      },
      {
        name: "我承諾會改變的",
        elements: [
          {
            type: ElementType.Text,
            value: "我承諾會改變的",
            x: 0.5,
            y: 0.4,
            style: {
              fontSize: "36px",
            },
          },
          {
            type: ElementType.Button,
            value: "不可以毀約，要遵守承諾，不然我會很傷心的",
            x: 0.5,
            y: 0.6,
            event: {
              click: [
                {
                  type: ElementEventype.ShowPage,
                  value: 9,
                },
              ],
            },
          },
        ],
      },
      {
        name: "<3",
        elements: [
          {
            type: ElementType.Image,
            x: 0.5,
            y: 0.4,
            style: {
              width: "100%",
              height: "100%",
              backgroundColor: "#fcbb9f",
            },
          },
          {
            type: ElementType.Text,
            value: "<3",
            x: 0.5,
            y: 0.4,
            style: {
              fontSize: "36px",
            },
          },
        ],
      },
      {
        name: "還是因為我不願好好溝通?",
        elements: [
          {
            type: ElementType.Text,
            value: "還是因為我不願好好溝通?",
            x: 0.5,
            y: 0.4,
            style: {
              fontSize: "36px",
            },
          },
          {
            type: ElementType.Button,
            value: "對",
            x: 0.3,
            y: 0.6,
            event: {
              click: [
                {
                  type: ElementEventype.ShowPage,
                  value: 7,
                },
              ],
            },
          },
          {
            type: ElementType.Button,
            value: "不對",
            x: 0.7,
            y: 0.6,
            event: {
              click: [
                {
                  type: ElementEventype.ShowPage,
                  value: 10,
                },
              ],
            },
          },
        ],
      },
    ],
  });