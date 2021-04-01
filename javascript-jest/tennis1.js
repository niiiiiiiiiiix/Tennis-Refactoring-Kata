"use strict";

const textScoring = ["Love", "Fifteen", "Thirty", "Forty"];
let score = "";

function equalScore(m_score1) {
  if (m_score1 >= 3) {
    score = "Deuce";
  } else {
    score = textScoring[m_score1] + "-All";
  }
  return score;
}

function differentScore(m_score1, m_score2) {
  if (m_score1 < 4 && m_score2 < 4) {
    bothLessThanFour(m_score1, m_score2);
  } else {
    eitherMoreThanFour(m_score1, m_score2);
  }
  return score;
}
function bothLessThanFour(m_score1, m_score2) {
  score = textScoring[m_score1] + "-" + textScoring[m_score2];
}
function eitherMoreThanFour(m_score1, m_score2) {
  let scoreDifference = m_score1 - m_score2;
  if (scoreDifference === 1) {
    score = "Advantage player1";
  } else if (scoreDifference === -1) {
    score = "Advantage player2";
  } else if (scoreDifference > 1) {
    score = "Win for player1";
  } else {
    score = "Win for player2";
  }
}

function getScore(m_score1, m_score2) {
  if (m_score1 === m_score2) {
    equalScore(m_score1);
  } else {
    differentScore(m_score1, m_score2);
  }
  return score;
}

module.exports = getScore;

//   let score = "";
//   let tempScore = 0;

//   if (m_score1 === m_score2) {
//     switch (m_score1) {
//       case 0:
//         score = "Love-All";
//         break;
//       case 1:
//         score = "Fifteen-All";
//         break;
//       case 2:
//         score = "Thirty-All";
//         break;
//       default:
//         score = "Deuce";
//         break;
//     }
//   } else if (m_score1 >= 4 || m_score2 >= 4) {
//     var minusResult = m_score1 - m_score2;
//     if (minusResult === 1) {
//       score = "Advantage player1";
//     } else if (minusResult === -1) {
//       score = "Advantage player2";
//     } else if (minusResult >= 2) {
//       score = "Win for player1";
//     } else {
//       score = "Win for player2";
//     }
//   } else {
//     for (var i = 1; i < 3; i++) {
//       if (i === 1) {
//         tempScore = m_score1;
//       } else {
//         score += "-";
//         tempScore = m_score2;
//       }
//       switch (tempScore) {
//         case 0:
//           score += "Love";
//           break;
//         case 1:
//           score += "Fifteen";
//           break;
//         case 2:
//           score += "Thirty";
//           break;
//         case 3:
//           score += "Forty";
//           break;
//       }
//     }
//   }
