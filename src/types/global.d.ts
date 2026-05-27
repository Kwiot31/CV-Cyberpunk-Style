interface Window {
  gtag?: (
    command: "event" | "config" | "js",
    eventName: string | Date,
    params?: Record<string, string | number | boolean>,
  ) => void;
}
