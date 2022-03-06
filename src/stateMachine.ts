import { createMachine } from "xstate";

type TrafficLightEvent = { type: "NEXT" };

type TraffiLightState =
  | { value: "green"; context: null }
  | { value: "yellow"; context: null }
  | { value: "red"; context: null };

export const trafficLightMachine = createMachine<
  null,
  TrafficLightEvent,
  TraffiLightState
>({
  id: "trafficLight",
  initial: "red",
  states: {
    green: {
      on: { NEXT: "yellow" },
    },
    yellow: {
      on: { NEXT: "red" },
    },
    red: {
      on: { NEXT: "green" },
    },
  },
});
