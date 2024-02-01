<script setup>
import {
  ElementEventype,
  ElementType,
  ElementTypeTagMap,
} from "@/data/element.mjs";
import { delay } from "@/utils/utils.mjs";
import { computed, ref } from "vue";

// {
//           type: ElementType.Image,
//           src: "https://assets.clibo.tw/images/commissions/9oeZxP-I7wz.gif?v=96c3a19aa94fa93b4f4975daa98e643",
//           x: 0.5,
//           y: 0.2,
//           style: {
//             width: "40%",
//             height: "40%",
//           },
//         },
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
                type: ElementEventype.ShowPage,
                value: 2,
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
          value: "當然是先吃午餐",
          x: 0.3,
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
          value: "突然想躺回去了",
          x: 0.7,
          y: 0.6,
          event: {
            click: [
              {
                type: ElementEventype.MoveRandom,
                count: 3,
                break: true,
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
          value: "繼續練習",
          x: 0.3,
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
        {
          type: ElementType.Button,
          value: "家教",
          x: 0.7,
          y: 0.7,
          event: {
            click: [
              {
                type: ElementEventype.ShowPage,
                value: 7,
              },
            ],
          },
        },
      ],
    },
    {
      name: "繼續睡吧，睡飽了才有精神",
      elements: [
        {
          type: ElementType.Text,
          value: "繼續睡吧，睡飽了才有精神",
          x: 0.5,
          y: 0.4,
          style: {
            fontSize: "36px",
          },
        },
        {
          type: ElementType.Button,
          value: "豪",
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
          value: "不行，今天有事要忙",
          x: 0.7,
          y: 0.6,
          event: {
            click: [
              {
                type: ElementEventype.MoveRandom,
                count: 3,
                break: true,
              },
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
          value: "晚安~",
          x: 0.3,
          y: 0.6,
          event: {
            click: [
              {
                type: ElementEventype.ShowPage,
                value: 4,
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
            click: [
              {
                type: ElementEventype.Diving,
                count: 5,
                break: true,
              },
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
      name: "祝你有個美夢，不要再有任何煩惱，好好睡吧",
      elements: [
        {
          type: ElementType.Image,
          x: 0.5,
          y: 0.5,
          style: {
            width: "100%",
            height: "100%",
            backgroundColor: "#fcbb9f",
          },
        },
        {
          type: ElementType.Text,
          value: "祝你有個美夢，不要再有任何煩惱，好好睡吧",
          x: 0.5,
          y: 0.4,
          style: {
            fontSize: "36px",
            color: "white",
          },
        },
        {
          type: ElementType.Button,
          value: "我真的只是開玩笑的",
          x: 0.5,
          y: 0.6,
          event: {
            click: [
              {
                type: ElementEventype.Disable,
              },
            ],
          },
        },
      ],
    },
    {
      name: "難過的時候，就是要吃好吃的，一定要讓自己開心",
      elements: [
        {
          type: ElementType.Image,
          x: 0.5,
          y: 0.5,
          style: {
            width: "100%",
            height: "100%",
            backgroundColor: "#fcbb9f",
          },
        },
        {
          type: ElementType.Text,
          value: "難過的時候，就是要吃好吃的，一定要讓自己開心",
          x: 0.5,
          y: 0.4,
          style: {
            fontSize: "36px",
            color: "white",
          },
        },
        {
          type: ElementType.Button,
          value: "我會的",
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
      name: "你會越來越好的，在這條路上你並不孤單",
      elements: [
        {
          type: ElementType.Image,
          x: 0.5,
          y: 0.5,
          style: {
            width: "100%",
            height: "100%",
            backgroundColor: "#fcbb9f",
          },
        },
        {
          type: ElementType.Text,
          value: "你會越來越好的，在這條路上你並不孤單",
          x: 0.5,
          y: 0.4,
          style: {
            fontSize: "36px",
            color: "white",
          },
        },
        {
          type: ElementType.Button,
          value: "返回",
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
      name: "出門在外，要注意安全。也別把身體搞壞了!",
      elements: [
        {
          type: ElementType.Image,
          x: 0.5,
          y: 0.5,
          style: {
            width: "100%",
            height: "100%",
            backgroundColor: "#fcbb9f",
          },
        },
        {
          type: ElementType.Text,
          value: "出門在外，要注意安全。也別把身體搞壞了!",
          x: 0.5,
          y: 0.4,
          style: {
            fontSize: "36px",
            color: "white",
          },
        },
        {
          type: ElementType.Button,
          value: "返回",
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
  ],
});

// 5、9
// temp states
const roses = ref(localStorage.getItem("roses")?.split(",").map(Number) || []);
console.log(
  localStorage.getItem("roses"),
  localStorage.getItem("roses")?.split(","),
  localStorage.getItem("roses")?.split(",").map(Number) || [],
  roses.value
);

// page states
const currentPageIndex = ref(0);
const currentPage = computed(() => data.value.pages[currentPageIndex.value]);

// functions
const executeEvent = async (
  element,
  { type, value, target, count },
  eventType,
  eventIdx
) => {
  const id = eventType + eventIdx;

  // block
  if (element["_event" + id] || (count && element["_count" + id] === count))
    return false;

  // set block
  element["_event" + id] = true;
  // set count
  if (count)
    element["_count" + id] = element["_count" + id]
      ? element["_count" + id] + 1
      : 1;

  // execute event
  switch (type) {
    case ElementEventype.ShowPage:
      currentPageIndex.value = value;
      // temp
      if ([5, 9].includes(value) && !roses.value.includes(value)) {
        roses.value.push(value);
        localStorage.setItem("roses", roses.value);
      }
      break;
    case ElementEventype.MoveRandom:
      element.x = Math.random();
      element.y = Math.random();
      await delay(300);
      break;
    case ElementEventype.Diving:
      if (!element.style) element.style = {};
      element.style.opacity = 0;
      await delay(300);
      element.style.transition = "none";
      element.x = Math.random();
      element.y = Math.random();
      await delay(50);
      element.style.transition = "all ease .2s";
      element.style.opacity = 1;
      await delay(300);
      break;
    case ElementEventype.SetElementProperty:
      break;
    case ElementEventype.Disable:
      element.disabled = true;
      break;
  }

  // remove block
  delete element["_event" + id];
  return true;
};

const eventHandler = async (event, idx, eventType) => {
  if (!event?.[eventType]) return;
  const events = event[eventType];

  const element = currentPage.value.elements[idx];

  for (let eventIdx = 0; eventIdx < events.length; eventIdx++) {
    const event = events[eventIdx];
    const result = await executeEvent(element, event, eventType, eventIdx);
    if (result && event.break) break;
  }
};
</script>

<template>
  <template
    v-for="(
      { type, value, x, y, style, event, ...restProps }, idx
    ) of currentPage.elements"
  >
    <component
      :is="ElementTypeTagMap[type]"
      :style="{
        position: 'absolute',
        left: x * 100 + '%',
        top: y * 100 + '%',
        transform: 'translate(-50%, -50%)',
        transition: 'all ease .3s',
        ...style,
      }"
      v-bind="restProps"
      @click="eventHandler(event, idx, 'click')"
      @mouseover="eventHandler(event, idx, 'mouseover')"
      @mouseout="eventHandler(event, idx, 'mouseout')"
    >
      {{ value }}
    </component>
  </template>
</template>
