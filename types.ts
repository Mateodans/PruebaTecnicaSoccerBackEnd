export interface Match {
    id: string
    leftLineup: Lineup[]
    leftBench: any[]
    leftInstructions: any
    leftTactic: string
    leftTacticName: string
    leftTacticPositioning: number
    leftTeamAddress: string
    leftTeamInfo: TeamInfo
    rightLineup: Lineup[]
    rightBench: any[]
    rightInstructions: any
    rightTactic: string
    rightTacticName: string
    rightTacticPositioning: number
    rightTeamAddress: string
    rightTeamInfo: TeamInfo
    comments: Comment[]
    performances: Performances
    score: number[]
    startedDatetime: string
  }
  
  export interface Lineup {
    id: string
    disabled: boolean
    dorsal: number
    image: string
    ovr: number
    player: Player
    position: string
    redCard: boolean
    yellowCards: number
  }
  
  export interface Player {
    age: number
    height: number
    id: number
    lastName: string
    condition: number
    level: number
    name: string
    overall: number
    owner: string
    potential: number
    preferredFoot: number
    role: string
    seeds: string[]
    sections: any
    specialAbilities: any[]
    specificRole: string
    weight: number
    imageName: string
  }
  
  export interface TeamInfo {
    id: string
    name: string
    manager: string
    clubAcronym: string
    clubLogo: {
        name: string
        color: string
      }
    lineupOverall: number
    isLineupCompleted: boolean
  }
  
  export interface Comment {
    time: number
    side?: string
    playerId?: string
    commentType: string
  }
  
  export interface Performances {
    left: PerformanceArray
    right: PerformanceArray
  }
  
  export interface PerformanceArray {
    fieldPlayers: number[]
    benchPlayers: number[]
  }

  // STATS

  export interface MatchStats {
    matchId: string
    leftTeam: TeamStats
    rightTeam: TeamStats
    leftFieldPlayers: PlayerStats[]
    leftBenchPlayers: PlayerStats[]
    rightFieldPlayers: PlayerStats[]
    rightBenchPlayers: PlayerStats[]
  }
  
  export interface TeamStats {
    goals: number
    shots: number
    shotsOnTarget: number
    shotsOffTarget: number
    assists: number
    passes: number
    shortPasses: number
    longPasses: number
    highPasses: number
    slidings: number
    interferes: number
    fouls: number
    deflects: number
    offsides: number
    cornerKicks: number
    freeKicks: number
    penaltyKicks: number
    yellowCards: number
    redCards: number
      attackZones: {
          left: number
          middle: number
          right: number
      }
  }
  
  export interface PlayerStats {
    playerId: string
    numberOfGoals: number
    goals: any[]
    numberOfShots: number
    shots: number[][]
    numberOfPasses: number
    numberOfShortPasses: number
    shortPasses: number[][]
    numberOfLongPasses: number
    longPasses: any[]
    numberOfHighPasses: number
    highPasses: number[][]
    assists: number
    numberOfSlidings: number
    slidings: any[]
    numberOfFouls: number
    fouls: any[]
    numberOfInterferes: number
    interferes: number[][]
    deflects: number
    goalieReceivedGoals: number
    yellowCards: number
    redCards: number
    performance: number
  }