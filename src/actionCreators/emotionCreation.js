/* CLASS : emotion */
class emotion
{
  constructor(keywords, eyes, mouths, arms) {
    this.keywords = keywords
    this.eyes = eyes
    this.mouths = mouths
    this.arms = arms
  }

  getEyes() {
    return Math.random()*(this.eyes.length) | 0
  }

  getMouth() {
    return Math.random()*(this.mouths.length) | 0
  }

  getArms() {
    return Math.random()*(this.arms.length) | 0
  }

  includesKeyword(keyword) {
    for(var i = 0; i < this.keywords.length; i++)
    {
      if(keyword.includes(this.keywords[i]))
      {
        return true
      }
    }
    return false
  }
}

export function getEmotionObjects() {
  //Face class: happy emotions
  const emotionsList = []
  const happy = new emotion(
    //key words
    ["happy", "positive", "smile", "smiling", "glad", "joy", "good", "terrific", "wonderful", "merry", "fun"],

    //eyes
    [["･","･"], ["'","'"], ["ˆ","ˆ"], ["^","^"], ["❛","❛"],["ᵔ","ᵔ"], [">","<"], ["´","`"], ["≧", "≦"],
      ["•","-"],["•", "•"], ["ꈍ","ꈍ"], ["╹", "╹"], ["❛", "❛"], ["･", "･"], ["꒡", "꒡"]],

    //mouths
    ["‿", "◡", "ᴥ", "ヮ", "͜ʖ", "ᴗ", "ᗜ", "◞ ", " ͜ʟ", "ڡ", "⌄", "▽", "▿", "ᵕ", " ͜• "],

    //arms
    [["\\(", ")/"], ["(っ",")っ"], ["(", ")"], ["(ɔ",")ɔ"], ["(ﾉ", ")ﾉ*:･ﾟ✧"], ["(ﾉ",")ﾉ"], ["(ू", "ू)"],
      ["(ु",")"], ["(ɔ",")ɔ♡"], ["(ﾉ",")ﾉ♡"], ["(｡", "｡)"], ["(๑", "๑)"],["(˵", "˵)"], ["ॢ(", "ॢ)"], ["(ʃƪ",")"],
      ["(•", "•)"], ["꒰", "꒱"]]
  )
  emotionsList.push(happy)



  //Face class: sad emotions
  const sad = new emotion(
    //keywords
    ["sad", "cry", "bad", "down", "blue", "defeated", "negative", "pessimistic", "depress", "terrible"],

    //eyes
    [["๏","๏,"], ["'","'"], ["･","･"], ["◔","◔"], ["ಥ","ಥ"], ["╥","╥"], ["˘","˘"], ["╯","╰,"], ["つ","`"],
      ["つ", "⊂"], ["︶","︶"],["´","`"], ["◉", "◉"], ["⏓","⏓"], ["ᴗ", "ᴗ"], ["•̥̥̥ ","•̥̥"], ["´•","•`"]],

    //mouths
    ["﹏", "︹", "︵", "︿","▭", "ʖ̯", "‸", "ᗝ", "⌓", "-"],

    //arms
    [["(",")"]]
  )
  emotionsList.push(sad)


  //Face class: stressed emotions
  const stressed = new emotion(
    //keywords
    ["stressed", "overwhelmed", "overworked", "busy", "burden", "pressure"],

    //eyes
    [["ﾟ", "ﾟ"], ["･", "･"], ["⚆ ", "⚆"], ["º", "º"], ["๏", "๏"], ["☉", "☉"]],

    //mouths
    [" ͟ʖ", "▭", "︵", " ‸ ", "ロ", "╭╮", "０", "〇"],

    //arms
    [["ლ(", "ლ)"], ["ᕕ(", ")ᕗ"], ["└(", ")┘"], ["ヽ","ﾉ"], ["ヽ(",")ﾉ"], ["=ヽ(",")ﾉ"]]
  )
  emotionsList.push(stressed)


  //Face class: mad emotions
  const mad =  new emotion(
    //keywords
    ["mad", "angry", "upset", "agnery", "crabby", "rage", "furious", "fury", "agitated", "livid", "irritated", "infuriated", "fuming", "wrath", "frustrated", "annoyed"],
    //eyes
    [["`", "´"], ["ಠ", "ಠ"], ["ᗒ", "ᗕ" ], ["⇀", "↼"], ["ò", "ó"], ["⸌", "⸍"]],

    //mouths
    ["ロ", "▭", "０", "ヘ", "ᨓ", "ᗝ", "□", "▃", "~", "⌂", "ᗣ", "⺫", "︵", "⌓", "ȏ"],

    //arms
    [["ლ(", "ლ)"], ["└(", ")┘"], ["щ(", "щ)"], ["\\(", "\\)"], ["(┛", ")┛"], ["(", ")"], ["(ง", ")ง"], ["ᕙ(", ")ᕗ"], ["|", "|"], ["٩(๑","๑)۶"], ["(┛", ")┛彡┻━┻"]]
  )
  emotionsList.push(mad)


  //face class: completely neutral
  const neutral =  new emotion(
    //keywords
    ["neutral", "fine", "okay", "middle", "decent", "indifferent","idk"],

    //eyes
    [["･", "･"], ["'","'"], ["•", "•"]],

    //mouths
    [" ͟ʖ", "-", "_"],

    //arms
    [["乁(", ")ㄏ"], ["¯\\_(", ")_/¯"], ["(", ")"], ["(", ")"], ["(", ")"], ["(", ")"]]
  )
  emotionsList.push(neutral)


  //face class: tired
  const tired =  new emotion(
    //keywords
    ["sleepy", "tired", "sleep", "exausted", "seepy", "yawn", "fatigue", "bed", "night", "goodnight"],

    //eyes
    [["´ ", "｀"], ["-", "-"], ["꒡", "꒡"], ["︶", "︶"], ["￣", "￣"], ["ꈍ","ꈍ"]],

    //mouths
    ["O", "Ｏ", "﹃", "˳", "～", "⌓", "o", "□", "〇"],

    //arms
    [["（ ", "）"], ["ヽ( ", ")ゞ"], ["(⌯",")"], ["(", ")"], ["(", ")ᐝ.∗̥✩⁺˚"], ["(", ").zZ"],["(", ")っc[_]"],
      ["ヾ(", ")ﾉ"], ["꒰", "꒱"]]
  )
  emotionsList.push(tired)


  //face class: determined  (ง’̀-‘́)ง
  const determined =  new emotion(
    //keywords
    ["determined", "triumph", "success", "i can do it", "can do", "hell yeah", "hell yes", "believe"],

    //eyes
    [["•̀","•́"], ["ò", "ó"], [">", "<"], ["•̀ ", "•́ "], ["’̀","‘́"]],

    //mouths
    ["O", "Ｏ", "ᴗ", "ワ", "ᗜ"],

    //arms
    [["(", ")૭ ̑̑"], ["(", ")૭✧"], ["ೕ(", ")"], ["٩(๑","๑)و"], ["ᕙ( ", " )ᕗ"], ["ᕦ(", ")ᕤ"]]
  )
  emotionsList.push(determined)


  //face class: excited
  const excited = new emotion(
    //key words
    ["excited", "ecstatic", "thrilled", "yippee", "wahoo", "yay", "omg"],

    //eyes
    [["ˆ","ˆ"], ["^","^"], ["ᵔ","ᵔ"], [">","<"], ["≧", "≦"],
      ["╹", "╹"], ["✧", "✧"], ["′", "‵"], ["✪", "✪"]],

    //mouths
    ["‿", "◡", "○", "ヮ", "▾", "ᴗ", "ᗜ", "▽", "▿", "▿"],

    //arms
    [["\\(", ")/"], ["(ﾉ", ")ﾉ*:･ﾟ✧"], ["(ﾉ",")ﾉ"], ["ヽ(", ")ﾉ"], ["ヾ(", ")ｼ"],
      ["\\(˵", "˵)/"], ["✧⁺⸜(●", "●)⸝⁺✧"], ["✧⁺⸜(",")⸝⁺✧"], ["✧*.◟(",")◞.*✧"], ["( ", "人）"],
      ["ヾ(", ")ﾉ♪"], ["ヾ(", ")ゝ"], ["╰(", "╰)"]]
  )
  emotionsList.push(excited)


  //face class: love
  const love = new emotion(
    //key words
    ["in love", "lovestruck", "love", "kiss", "hug", "smooch", "crush", "date",
      "romantic", "romance", "flirt"],

    //eyes
    [["♥","♥"], ["♡", "♡"], ["❤", "❤"], ["ˆ","ˆ"], ["^","^"], ["ᵔ","ᵔ"], ["´","`"], ["≧", "≦"],
      ["•","-"], ["ꈍ","ꈍ"], ["╹", "╹"], ["꒡", "꒡"], ["﹒︠", "﹒︡"], ["•", "◠"], ["˘", "˘"]],

    //mouths
    ["‿", "◡", "⌓", "ヮ", "▾", "ᴗ", "ᗜ", "▽", "▿", "▿", "ε", "3", "꒵", "‧̫"],

    //arms
    [["♥ ( ", "人）"], ["(ɔ",")ɔ♡"], ["(ﾉ",")ﾉ♡"], ["(ʃƪ",")⁺✧♥"],["♥⁺⸜(",")⸝⁺♥"],
      ["(", ")♡"], ["❤ヾ(๑", "๑ )"], ["꒰⸝","꒱⸝⁺♡"], ["(∩", "∩)♡"], ["(", ")♡.°⑅"],
      ["꒰", "꒱♡.°⑅"], ["(◍", "◍)❤"], ["\\(⸝⸝⸝", "⸝⸝⸝)"], ["°₊♡(", ")♡₊°"]]
  )
  emotionsList.push(love)


  return emotionsList
}
