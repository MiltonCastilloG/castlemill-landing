import { getCurrentLanguage, setLanguage, toggleLanguage } from "./store";

describe("translation store", () => {
  it("starts with English as default", () => {
    expect(getCurrentLanguage()).toBe("en");
  });

  it("updates language with setLanguage", () => {
    setLanguage("es");
    expect(getCurrentLanguage()).toBe("es");
  });

  it("toggles between English and Spanish", () => {
    setLanguage("en");
    toggleLanguage();
    expect(getCurrentLanguage()).toBe("es");

    toggleLanguage();
    expect(getCurrentLanguage()).toBe("en");
  });
});
