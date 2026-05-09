import Foundation

enum Screen {
    case today
    case prayer
    case completion
}

struct TodayContent {
    let ayahReference: String
    let arabicText: String
    let englishText: String
    let reflection: String
    let prayerPrompt: String
    let completionMessage: String
}

enum MockContent {
    static let today = TodayContent(
        ayahReference: "94:5",
        arabicText: "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
        englishText: "And, behold, with every hardship comes ease:",
        reflection: "Today is about staying steady and remembering that difficulty is not the end of the story.",
        prayerPrompt: "Take one quiet moment, breathe slowly, and ask for steadiness and ease.",
        completionMessage: "You showed up today. That matters."
    )
}

final class AppNavigator {
    private(set) var current: Screen = .today

    func goToPrayer() { current = .prayer }
    func goToCompletion() { current = .completion }
    func restart() { current = .today }
}
