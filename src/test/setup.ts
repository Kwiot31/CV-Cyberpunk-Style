import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

const mockedCanvasContext = {
    clearRect: vi.fn(),
    beginPath: vi.fn(),
    moveTo: vi.fn(),
    lineTo: vi.fn(),
    stroke: vi.fn(),
    fillRect: vi.fn(),
    createLinearGradient: vi.fn(() => ({ addColorStop: vi.fn() })),
    fill: vi.fn(),
    arc: vi.fn(),
    shadowBlur: 0,
    shadowColor: "",
    lineWidth: 0,
    strokeStyle: "",
    fillStyle: "",
    lineCap: "round",
    lineJoin: "round",
} as unknown as CanvasRenderingContext2D;

vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockImplementation(
  () => mockedCanvasContext,
);
