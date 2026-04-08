import { act, renderHook } from "@testing-library/react";
import { setLanguage, toggleLanguage } from "./store";
import { useTranslations } from "./useTranslations";

describe("useTranslations", () => {
  beforeEach(() => {
    setLanguage("en");
  });

  it("returns translated values for current language", () => {
    const translations = {
      title: { en: "Hello", es: "Hola" },
    };
    const { result } = renderHook(() => useTranslations(translations));

    expect(result.current.language).toBe("en");
    expect(result.current.t("title")).toBe("Hello");
  });

  it("reacts to language toggle updates", () => {
    const translations = {
      title: { en: "Hello", es: "Hola" },
    };
    const { result } = renderHook(() => useTranslations(translations));

    act(() => {
      toggleLanguage();
    });

    expect(result.current.language).toBe("es");
    expect(result.current.t("title")).toBe("Hola");
  });
});
