package com.quran.app

sealed class Screen {
    data object Today : Screen()
    data object Prayer : Screen()
    data object Completion : Screen()
}

data class TodayContent(
    val ayahReference: String,
    val arabicText: String,
    val englishText: String,
    val reflection: String,
    val prayerPrompt: String,
    val completionMessage: String,
)

object MockContent {
    val today = TodayContent(
        ayahReference = "94:5",
        arabicText = "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
        englishText = "And, behold, with every hardship comes ease:",
        reflection = "Today is about staying steady and remembering that difficulty is not the end of the story.",
        prayerPrompt = "Take one quiet moment, breathe slowly, and ask for steadiness and ease.",
        completionMessage = "You showed up today. That matters.",
    )
}

class AppNavigator {
    private var current: Screen = Screen.Today

    fun currentScreen(): Screen = current

    fun goToPrayer() {
        current = Screen.Prayer
    }

    fun goToCompletion() {
        current = Screen.Completion
    }

    fun restart() {
        current = Screen.Today
    }
}

fun renderToday(content: TodayContent): String = buildString {
    appendLine("Today")
    appendLine(content.ayahReference)
    appendLine(content.arabicText)
    appendLine(content.englishText)
    appendLine(content.reflection)
}

fun renderPrayer(content: TodayContent): String = buildString {
    appendLine("Prayer")
    appendLine(content.prayerPrompt)
}

fun renderCompletion(content: TodayContent): String = buildString {
    appendLine("Completion")
    appendLine(content.completionMessage)
}
