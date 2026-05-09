import Foundation

func renderToday(_ content: TodayContent) -> String {
    [
        "Today",
        content.ayahReference,
        content.arabicText,
        content.englishText,
        content.reflection,
    ].joined(separator: "\n")
}

func renderPrayer(_ content: TodayContent) -> String {
    [
        "Prayer",
        content.prayerPrompt,
    ].joined(separator: "\n")
}

func renderCompletion(_ content: TodayContent) -> String {
    [
        "Completion",
        content.completionMessage,
    ].joined(separator: "\n")
}
