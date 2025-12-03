class FantasyPlayer {
    constructor(position, name, lastGamePoints, riskLevel, recCellId) {
        this.position = position;
        this.name = name;
        this.lastGamePoints = lastGamePoints;
        this.riskLevel = riskLevel;
        this.recCellId = recCellId;

    }

    getRiskLabel() {
        if (this.riskLevel === "low") 
            return "Safe floor";
        if (this.riskLevel === "medium") 
            return "Balanced risk";
        if (this.riskLevel === "high") 
            return "High-risk upside";


    return "Unknown risk";
    }

    getStartSitRecommendation(threshold) {
        if (this.lastGamePoints >= threshold) {
            return "START";
        }
        if (this.riskLevel === "low" && this.lastGamePoints >= threshold - 2) {
            return "START";
        }
        return "SIT";
    }

    getSummary(threshold) {
        const decision = this.getStartSitRecommendation(threshold);
        const risk = this.getRiskLabel();
        return decision + ": " + risk;
    }
}


const roster = [
    new FantasyPlayer("QB", "Jordan Love", 18.4, "medium", "rec-jordan-love"),
    new FantasyPlayer("RB", "Breece Hall", 21.7, "low", "rec-breece-hall"),
    new FantasyPlayer("RB", "Ashton Jeanty", 16.2, "medium", "rec-ashton-jeanty"),
    new FantasyPlayer("WR", "Davante Adams", 14.9, "medium", "rec-davante-adams"),
    new FantasyPlayer("WR", "Quentin Johnston", 9.3, "high", "rec-quentin-johnston"),
    new FantasyPlayer("TE", "Trey McBride", 12.6, "low", "rec-trey-mcbride"),
    new FantasyPlayer("FLEX", "DeVonta Smith", 13.1, "medium", "rec-devonta-smith"),
    new FantasyPlayer("D/ST", "Vikings D/ST", 8.0, "medium", "rec-vikings-dst"),
    new FantasyPlayer("K", "Matt Prater", 7.0, "low", "rec-matt-prater")
];


document.addEventListener("DOMContentLoaded", function () {
    const threshold = 12;

    roster.forEach(player => {
        const cell = document.getElementById(player.recCellId);


        const summary = player.getSummary(threshold);

        cell.textContent = summary;



    });
});