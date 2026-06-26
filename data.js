// きょうなに蒸す？ Ver.3
// 🩵 美容モード / 🌿 薬膳モード / 🥦 食材図鑑 / 🫚 薬味・たれ提案

const BEAUTY_GOALS = {
  "美肌": "ハリ・ツヤを意識したい日",
  "透明感": "くすみや紫外線ダメージが気になる日",
  "肌荒れ": "肌のゆらぎや吹き出物が気になる日",
  "腸活": "お腹の調子を整えたい日",
  "むくみ改善": "顔や脚をすっきりさせたい日",
  "ダイエット": "軽めに満足感を出したい日",
  "疲労回復": "疲れやだるさが気になる日",
  "冷え改善": "体をあたためたい日",
  "二日酔い": "飲みすぎた翌日にやさしく整えたい日",
  "おまかせ": "迷った日のバランス提案"
};

const YAKUZEN_GOALS = {
  "冷え改善": "体を温めたい日",
  "胃腸ケア": "胃腸をやさしく整えたい日",
  "むくみ改善": "水分バランスを整えたい日",
  "疲労回復": "気力・体力を補いたい日",
  "免疫力UP": "季節の変わり目や体調管理を意識したい日",
  "夏バテ対策": "暑さや食欲のなさが気になる日",
  "風邪予防": "冷えや喉の不調が気になる日",
  "巡りケア": "血色やめぐりを意識したい日",
  "ストレスケア": "香りのある食材で気分を整えたい日",
  "二日酔い": "飲みすぎた翌日にやさしく整えたい日",
  "おまかせ": "その日の体調に合わせたバランス提案"
};

const INGREDIENTS = [
  {
    "name": "鶏むね肉",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "ダイエット",
    "beautySub": "美肌",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "高タンパク・低脂質で、肌や髪の材料を補いやすい定番。",
    "steamTime": "10〜15分"
  },
  {
    "name": "鶏もも肉",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "疲労回復",
    "beautySub": "美肌",
    "yakuzenMain": "冷え改善",
    "yakuzenSub": "疲労回復",
    "memo": "満足感を出したい日に向く。",
    "steamTime": "10〜15分"
  },
  {
    "name": "ささみ",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "ダイエット",
    "beautySub": "肌荒れ",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "低脂質で軽めに食べたい日に使いやすい。",
    "steamTime": "10〜15分"
  },
  {
    "name": "手羽元",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "美肌",
    "beautySub": "疲労回復",
    "yakuzenMain": "冷え改善",
    "yakuzenSub": "疲労回復",
    "memo": "骨付きで満足感が出やすい。",
    "steamTime": "18〜25分"
  },
  {
    "name": "手羽先",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "美肌",
    "beautySub": "疲労回復",
    "yakuzenMain": "冷え改善",
    "yakuzenSub": "疲労回復",
    "memo": "コクがあり、満足感を足したい日に。",
    "steamTime": "18〜25分"
  },
  {
    "name": "豚ロース",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "疲労回復",
    "beautySub": "ダイエット",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "胃腸ケア",
    "memo": "ビタミンB群を意識したい日に。",
    "steamTime": "10〜15分"
  },
  {
    "name": "豚しゃぶ肉",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "疲労回復",
    "beautySub": "むくみ改善",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "胃腸ケア",
    "memo": "薄切りで蒸し時間が短く使いやすい。",
    "steamTime": "5〜8分"
  },
  {
    "name": "豚ヒレ",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "ダイエット",
    "beautySub": "疲労回復",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "脂質を抑えつつ満足感を出せる。",
    "steamTime": "10〜15分"
  },
  {
    "name": "豚肩ロース",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "疲労回復",
    "beautySub": "冷え改善",
    "yakuzenMain": "冷え改善",
    "yakuzenSub": "疲労回復",
    "memo": "食べごたえを出したい日に。",
    "steamTime": "10〜15分"
  },
  {
    "name": "牛赤身肉",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "疲労回復",
    "beautySub": "美肌",
    "yakuzenMain": "巡りケア",
    "yakuzenSub": "疲労回復",
    "memo": "鉄分やたんぱく質を意識したい日に。",
    "steamTime": "10〜15分"
  },
  {
    "name": "鮭",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "美肌",
    "beautySub": "透明感",
    "yakuzenMain": "巡りケア",
    "yakuzenSub": "疲労回復",
    "memo": "アスタキサンチンを含む美容定番食材。",
    "steamTime": "10〜15分"
  },
  {
    "name": "タラ",
    "category": "タンパク質",
    "season": "冬",
    "beautyMain": "ダイエット",
    "beautySub": "二日酔い",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "胃腸ケア",
    "memo": "低脂質で軽めの蒸しごはんに合う。",
    "steamTime": "10〜15分"
  },
  {
    "name": "鯖",
    "category": "タンパク質",
    "season": "秋",
    "beautyMain": "美肌",
    "beautySub": "肌荒れ",
    "yakuzenMain": "巡りケア",
    "yakuzenSub": "疲労回復",
    "memo": "良質な脂質を摂りたい日に。",
    "steamTime": "10〜15分"
  },
  {
    "name": "ぶり",
    "category": "タンパク質",
    "season": "冬",
    "beautyMain": "疲労回復",
    "beautySub": "冷え改善",
    "yakuzenMain": "冷え改善",
    "yakuzenSub": "疲労回復",
    "memo": "冬に満足感を出しやすい魚。",
    "steamTime": "10〜15分"
  },
  {
    "name": "まぐろ",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "ダイエット",
    "beautySub": "疲労回復",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "高タンパクで脂質を抑えやすい。",
    "steamTime": "10〜15分"
  },
  {
    "name": "カツオ",
    "category": "タンパク質",
    "season": "春",
    "beautyMain": "疲労回復",
    "beautySub": "美肌",
    "yakuzenMain": "巡りケア",
    "yakuzenSub": "疲労回復",
    "memo": "鉄分やたんぱく質を意識したい日に。",
    "steamTime": "10〜15分"
  },
  {
    "name": "エビ",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "美肌",
    "beautySub": "ダイエット",
    "yakuzenMain": "冷え改善",
    "yakuzenSub": "疲労回復",
    "memo": "軽めで彩りも出しやすい。",
    "steamTime": "5〜8分"
  },
  {
    "name": "ホタテ",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "美肌",
    "beautySub": "疲労回復",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "胃腸ケア",
    "memo": "うまみがあり満足感を足せる。",
    "steamTime": "5〜8分"
  },
  {
    "name": "イカ",
    "category": "タンパク質",
    "season": "夏",
    "beautyMain": "ダイエット",
    "beautySub": "疲労回復",
    "yakuzenMain": "夏バテ対策",
    "yakuzenSub": "胃腸ケア",
    "memo": "低脂質でさっぱり食べやすい。",
    "steamTime": "5〜8分"
  },
  {
    "name": "タコ",
    "category": "タンパク質",
    "season": "夏",
    "beautyMain": "疲労回復",
    "beautySub": "ダイエット",
    "yakuzenMain": "夏バテ対策",
    "yakuzenSub": "胃腸ケア",
    "memo": "噛みごたえがあり満足感を出せる。",
    "steamTime": "5〜8分"
  },
  {
    "name": "あさり",
    "category": "タンパク質",
    "season": "春",
    "beautyMain": "二日酔い",
    "beautySub": "疲労回復",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "胃腸ケア",
    "memo": "飲みすぎた翌日やミネラルを意識したい日に。",
    "steamTime": "5〜8分"
  },
  {
    "name": "しじみ",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "二日酔い",
    "beautySub": "疲労回復",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "胃腸ケア",
    "memo": "二日酔いの日にやさしく取り入れたい食材。",
    "steamTime": "5〜8分"
  },
  {
    "name": "チーズ",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "美肌",
    "beautySub": "疲労回復",
    "yakuzenMain": "冷え改善",
    "yakuzenSub": "疲労回復",
    "memo": "蒸し野菜やかぼちゃとの相性抜群。ご褒美感を出したい日に。",
    "steamTime": "仕上げに1〜2分"
  },
  {
    "name": "牡蠣",
    "category": "タンパク質",
    "season": "冬",
    "beautyMain": "美肌",
    "beautySub": "肌荒れ",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "亜鉛などを意識したい冬向け食材。",
    "steamTime": "10〜15分"
  },
  {
    "name": "豆腐",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "二日酔い",
    "beautySub": "ダイエット",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "胃腸ケア",
    "memo": "軽めに整えたい日に使いやすい。",
    "steamTime": "10〜15分"
  },
  {
    "name": "卵",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "肌荒れ",
    "beautySub": "美肌",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "栄養バランスを整えやすい。",
    "steamTime": "10〜15分"
  },
  {
    "name": "春キャベツ",
    "category": "野菜",
    "season": "春",
    "beautyMain": "腸活",
    "beautySub": "美肌",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "やわらかく甘みがあり食物繊維も摂れる。",
    "steamTime": "5〜10分"
  },
  {
    "name": "新玉ねぎ",
    "category": "野菜",
    "season": "春",
    "beautyMain": "疲労回復",
    "beautySub": "腸活",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "胃腸ケア",
    "memo": "甘みが出やすく春の蒸しごはん向き。",
    "steamTime": "5〜10分"
  },
  {
    "name": "アスパラガス",
    "category": "野菜",
    "season": "春",
    "beautyMain": "疲労回復",
    "beautySub": "美肌",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "胃腸ケア",
    "memo": "甘みが増し、シャキッとした食感が楽しめます。",
    "steamTime": "5〜10分"
  },
  {
    "name": "菜の花",
    "category": "野菜",
    "season": "春",
    "beautyMain": "美肌",
    "beautySub": "肌荒れ",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "春らしい苦みと栄養感を足せる。",
    "steamTime": "5〜10分"
  },
  {
    "name": "スナップえんどう",
    "category": "野菜",
    "season": "春",
    "beautyMain": "美肌",
    "beautySub": "透明感",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "彩りと甘みを足しやすい。",
    "steamTime": "5〜10分"
  },
  {
    "name": "そら豆",
    "category": "野菜",
    "season": "春",
    "beautyMain": "疲労回復",
    "beautySub": "ダイエット",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "胃腸ケア",
    "memo": "春の満足感食材として使える。",
    "steamTime": "5〜10分"
  },
  {
    "name": "クレソン",
    "category": "野菜",
    "season": "春",
    "beautyMain": "透明感",
    "beautySub": "美肌",
    "yakuzenMain": "ストレスケア",
    "yakuzenSub": "巡りケア",
    "memo": "香りがありさっぱり感を出せる。",
    "steamTime": "3〜5分"
  },
  {
    "name": "ラディッシュ",
    "category": "野菜",
    "season": "春",
    "beautyMain": "透明感",
    "beautySub": "むくみ改善",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "彩りを足したい日に。",
    "steamTime": "5〜10分"
  },
  {
    "name": "セロリ",
    "category": "野菜",
    "season": "春",
    "beautyMain": "むくみ改善",
    "beautySub": "二日酔い",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "胃腸ケア",
    "memo": "香りでさっぱり食べやすい。",
    "steamTime": "5〜10分"
  },
  {
    "name": "ふき",
    "category": "野菜",
    "season": "春",
    "beautyMain": "腸活",
    "beautySub": "むくみ改善",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "むくみ改善",
    "memo": "春らしい香りを足せる。",
    "steamTime": "5〜10分"
  },
  {
    "name": "うど",
    "category": "野菜",
    "season": "春",
    "beautyMain": "むくみ改善",
    "beautySub": "腸活",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "すっきりした味わい。",
    "steamTime": "5〜10分"
  },
  {
    "name": "絹さや",
    "category": "野菜",
    "season": "春",
    "beautyMain": "美肌",
    "beautySub": "透明感",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "彩りを足しやすい春野菜。",
    "steamTime": "3〜5分"
  },
  {
    "name": "せり",
    "category": "野菜",
    "season": "春",
    "beautyMain": "二日酔い",
    "beautySub": "むくみ改善",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "胃腸ケア",
    "memo": "香りがよく、飲みすぎた翌日にもさっぱり使いやすい。",
    "steamTime": "5〜10分"
  },
  {
    "name": "パプリカ赤",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "透明感",
    "beautySub": "肌荒れ",
    "yakuzenMain": "免疫力UP",
    "yakuzenSub": "胃腸ケア",
    "memo": "ビタミンCを意識したい日に。",
    "steamTime": "5〜10分"
  },
  {
    "name": "パプリカ黄",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "透明感",
    "beautySub": "美肌",
    "yakuzenMain": "免疫力UP",
    "yakuzenSub": "胃腸ケア",
    "memo": "彩りがよく美容目的に使いやすい。",
    "steamTime": "5〜10分"
  },
  {
    "name": "オクラ",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "腸活",
    "beautySub": "むくみ改善",
    "yakuzenMain": "夏バテ対策",
    "yakuzenSub": "胃腸ケア",
    "memo": "ねばねば食感で腸活向き。",
    "steamTime": "5〜10分"
  },
  {
    "name": "ズッキーニ",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "ダイエット",
    "beautySub": "むくみ改善",
    "yakuzenMain": "夏バテ対策",
    "yakuzenSub": "胃腸ケア",
    "memo": "軽めでかさ増ししやすい。",
    "steamTime": "5〜10分"
  },
  {
    "name": "なす",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "美肌",
    "beautySub": "むくみ改善",
    "yakuzenMain": "夏バテ対策",
    "yakuzenSub": "胃腸ケア",
    "memo": "蒸すととろっとやわらかくなり、甘みも増します。",
    "steamTime": "5〜10分"
  },
  {
    "name": "トマト",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "二日酔い",
    "beautySub": "透明感",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "胃腸ケア",
    "memo": "酸味でさっぱり食べやすい。",
    "steamTime": "5〜10分"
  },
  {
    "name": "ミニトマト",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "透明感",
    "beautySub": "美肌",
    "yakuzenMain": "夏バテ対策",
    "yakuzenSub": "胃腸ケア",
    "memo": "彩りと酸味を足しやすい。",
    "steamTime": "5〜10分"
  },
  {
    "name": "きゅうり",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "二日酔い",
    "beautySub": "むくみ改善",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "胃腸ケア",
    "memo": "さっぱり仕上げたい日に。",
    "steamTime": "5〜10分"
  },
  {
    "name": "モロヘイヤ",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "肌荒れ",
    "beautySub": "美肌",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "栄養感のある夏野菜。",
    "steamTime": "5〜10分"
  },
  {
    "name": "ゴーヤ",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "疲労回復",
    "beautySub": "透明感",
    "yakuzenMain": "夏バテ対策",
    "yakuzenSub": "胃腸ケア",
    "memo": "夏バテ気味の日に。",
    "steamTime": "5〜10分"
  },
  {
    "name": "枝豆",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "ダイエット",
    "beautySub": "疲労回復",
    "yakuzenMain": "夏バテ対策",
    "yakuzenSub": "胃腸ケア",
    "memo": "たんぱく質感と満足感を足せる。",
    "steamTime": "5〜10分"
  },
  {
    "name": "とうがん",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "むくみ改善",
    "beautySub": "二日酔い",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "胃腸ケア",
    "memo": "水分が多く、軽く整えたい日に。",
    "steamTime": "10〜15分"
  },
  {
    "name": "ししとう",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "透明感",
    "beautySub": "疲労回復",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "胃腸ケア",
    "memo": "美味しい苦みを足せる。",
    "steamTime": "5〜10分"
  },
  {
    "name": "みょうが",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "二日酔い",
    "beautySub": "むくみ改善",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "胃腸ケア",
    "memo": "香りでさっぱり感を出せる。",
    "steamTime": "2〜3分"
  },
  {
    "name": "青じそ",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "二日酔い",
    "beautySub": "透明感",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "胃腸ケア",
    "memo": "香りで食欲がない日にも使いやすい。",
    "steamTime": "仕上げ"
  },
  {
    "name": "春菊",
    "category": "野菜",
    "season": "秋",
    "beautyMain": "美肌",
    "beautySub": "透明感",
    "yakuzenMain": "ストレスケア",
    "yakuzenSub": "巡りケア",
    "memo": "香りがいい。",
    "steamTime": "5〜10分"
  },
  {
    "name": "かぶ",
    "category": "野菜",
    "season": "秋",
    "beautyMain": "むくみ改善",
    "beautySub": "腸活",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "むくみ改善",
    "memo": "やさしい甘みで食べやすい。",
    "steamTime": "10〜15分"
  },
  {
    "name": "にんじん",
    "category": "野菜",
    "season": "秋",
    "beautyMain": "肌荒れ",
    "beautySub": "美肌",
    "yakuzenMain": "免疫力UP",
    "yakuzenSub": "胃腸ケア",
    "memo": "彩りとβカロテンを足せる。",
    "steamTime": "10〜15分"
  },
  {
    "name": "チンゲンサイ",
    "category": "野菜",
    "season": "秋",
    "beautyMain": "透明感",
    "beautySub": "ダイエット",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "軽めで使いやすい青菜。",
    "steamTime": "5〜10分"
  },
  {
    "name": "ビーツ",
    "category": "野菜",
    "season": "秋",
    "beautyMain": "疲労回復",
    "beautySub": "透明感",
    "yakuzenMain": "巡りケア",
    "yakuzenSub": "疲労回復",
    "memo": "色がきれいで特別感がある。",
    "steamTime": "5〜10分"
  },
  {
    "name": "水菜",
    "category": "野菜",
    "season": "秋",
    "beautyMain": "ダイエット",
    "beautySub": "透明感",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "軽くさっぱり食べたい日に。",
    "steamTime": "3〜5分"
  },
  {
    "name": "紫キャベツ",
    "category": "野菜",
    "season": "秋",
    "beautyMain": "透明感",
    "beautySub": "腸活",
    "yakuzenMain": "巡りケア",
    "yakuzenSub": "疲労回復",
    "memo": "彩りがきれいで見た目が華やか。",
    "steamTime": "5〜10分"
  },
  {
    "name": "ケール",
    "category": "野菜",
    "season": "秋",
    "beautyMain": "肌荒れ",
    "beautySub": "美肌",
    "yakuzenMain": "免疫力UP",
    "yakuzenSub": "胃腸ケア",
    "memo": "美容目的に使いやすい青菜。",
    "steamTime": "5〜10分"
  },
  {
    "name": "白菜",
    "category": "野菜",
    "season": "冬",
    "beautyMain": "二日酔い",
    "beautySub": "ダイエット",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "胃腸ケア",
    "memo": "かさ増ししやすく軽めに食べられる。",
    "steamTime": "5〜10分"
  },
  {
    "name": "長ねぎ",
    "category": "野菜",
    "season": "冬",
    "beautyMain": "冷え改善",
    "beautySub": "疲労回復",
    "yakuzenMain": "冷え改善",
    "yakuzenSub": "疲労回復",
    "memo": "冬の蒸しごはんに香りを足せる。",
    "steamTime": "5〜10分"
  },
  {
    "name": "大根",
    "category": "野菜",
    "season": "冬",
    "beautyMain": "二日酔い",
    "beautySub": "むくみ改善",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "胃腸ケア",
    "memo": "さっぱり軽く食べたい日に。",
    "steamTime": "10〜15分"
  },
  {
    "name": "小松菜",
    "category": "野菜",
    "season": "冬",
    "beautyMain": "肌荒れ",
    "beautySub": "透明感",
    "yakuzenMain": "免疫力UP",
    "yakuzenSub": "胃腸ケア",
    "memo": "青菜の栄養感を足しやすい。",
    "steamTime": "5〜10分"
  },
  {
    "name": "ほうれん草",
    "category": "野菜",
    "season": "冬",
    "beautyMain": "肌荒れ",
    "beautySub": "美肌",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "栄養バランスを整えたい日に。",
    "steamTime": "5〜10分"
  },
  {
    "name": "ブロッコリー",
    "category": "野菜",
    "season": "冬",
    "beautyMain": "肌荒れ",
    "beautySub": "美肌",
    "yakuzenMain": "免疫力UP",
    "yakuzenSub": "胃腸ケア",
    "memo": "ビタミンCと食物繊維を意識したい日に。",
    "steamTime": "5〜10分"
  },
  {
    "name": "カリフラワー",
    "category": "野菜",
    "season": "冬",
    "beautyMain": "ダイエット",
    "beautySub": "腸活",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "軽めのかさ増しに使いやすい。",
    "steamTime": "5〜10分"
  },
  {
    "name": "芽キャベツ",
    "category": "野菜",
    "season": "冬",
    "beautyMain": "美肌",
    "beautySub": "腸活",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "ころっとかわいく満足感もある。",
    "steamTime": "5〜10分"
  },
  {
    "name": "ロマネスコ",
    "category": "野菜",
    "season": "冬",
    "beautyMain": "透明感",
    "beautySub": "美肌",
    "yakuzenMain": "免疫力UP",
    "yakuzenSub": "胃腸ケア",
    "memo": "見た目がかわいく特別感が出る。",
    "steamTime": "5〜10分"
  },
  {
    "name": "ターサイ",
    "category": "野菜",
    "season": "冬",
    "beautyMain": "冷え改善",
    "beautySub": "美肌",
    "yakuzenMain": "冷え改善",
    "yakuzenSub": "疲労回復",
    "memo": "冬の青菜として使いやすい。",
    "steamTime": "5〜10分"
  },
  {
    "name": "わさび菜",
    "category": "野菜",
    "season": "冬",
    "beautyMain": "透明感",
    "beautySub": "二日酔い",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "胃腸ケア",
    "memo": "ピリッとした香りでさっぱり食べやすい。",
    "steamTime": "5〜10分"
  },
  {
    "name": "キャベツ",
    "category": "野菜",
    "season": "通年",
    "beautyMain": "二日酔い",
    "beautySub": "腸活",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "胃腸ケア",
    "memo": "通年使いやすい定番野菜。",
    "steamTime": "5〜10分"
  },
  {
    "name": "もやし",
    "category": "野菜",
    "season": "通年",
    "beautyMain": "ダイエット",
    "beautySub": "疲労回復",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "低コストでかさ増しできる。",
    "steamTime": "5〜10分"
  },
  {
    "name": "豆苗",
    "category": "野菜",
    "season": "通年",
    "beautyMain": "美肌",
    "beautySub": "ダイエット",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "彩りと栄養感を足しやすい。",
    "steamTime": "5〜10分"
  },
  {
    "name": "さつまいも",
    "category": "炭水化物",
    "season": "秋",
    "beautyMain": "腸活",
    "beautySub": "ダイエット",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "食物繊維と満足感を出しやすい。",
    "steamTime": "10〜20分"
  },
  {
    "name": "れんこん",
    "category": "炭水化物",
    "season": "秋",
    "beautyMain": "腸活",
    "beautySub": "肌荒れ",
    "yakuzenMain": "巡りケア",
    "yakuzenSub": "疲労回復",
    "memo": "歯ごたえがあり満足感を出せる。",
    "steamTime": "10〜20分"
  },
  {
    "name": "かぼちゃ",
    "category": "炭水化物",
    "season": "秋",
    "beautyMain": "肌荒れ",
    "beautySub": "美肌",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "甘みとβカロテンを意識したい日に。",
    "steamTime": "10〜20分"
  },
  {
    "name": "ごぼう",
    "category": "炭水化物",
    "season": "秋",
    "beautyMain": "腸活",
    "beautySub": "ダイエット",
    "yakuzenMain": "巡りケア",
    "yakuzenSub": "疲労回復",
    "memo": "食物繊維をしっかり足せる。",
    "steamTime": "10〜20分"
  },
  {
    "name": "里芋",
    "category": "炭水化物",
    "season": "秋",
    "beautyMain": "腸活",
    "beautySub": "むくみ改善",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "むくみ改善",
    "memo": "ほくっとした満足感を出せる。",
    "steamTime": "10〜20分"
  },
  {
    "name": "長芋",
    "category": "炭水化物",
    "season": "秋",
    "beautyMain": "ダイエット",
    "beautySub": "腸活",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "軽めで食感がよい。",
    "steamTime": "10〜20分"
  },
  {
    "name": "じゃがいも",
    "category": "炭水化物",
    "season": "通年",
    "beautyMain": "疲労回復",
    "beautySub": "ダイエット",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "満足感を出したい日に。",
    "steamTime": "10〜20分"
  },
  {
    "name": "メークイン",
    "category": "炭水化物",
    "season": "通年",
    "beautyMain": "疲労回復",
    "beautySub": "冷え改善",
    "yakuzenMain": "冷え改善",
    "yakuzenSub": "疲労回復",
    "memo": "蒸すとしっとり食べやすい。",
    "steamTime": "10〜20分"
  },
  {
    "name": "栗",
    "category": "炭水化物",
    "season": "秋",
    "beautyMain": "疲労回復",
    "beautySub": "美肌",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "胃腸ケア",
    "memo": "秋らしい甘みと満足感を足せる。",
    "steamTime": "10〜20分"
  },
  {
    "name": "むかご",
    "category": "炭水化物",
    "season": "秋",
    "beautyMain": "腸活",
    "beautySub": "疲労回復",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "ほくほく感を足せる。",
    "steamTime": "10〜20分"
  },
  {
    "name": "銀杏",
    "category": "炭水化物",
    "season": "秋",
    "beautyMain": "疲労回復",
    "beautySub": "美肌",
    "yakuzenMain": "巡りケア",
    "yakuzenSub": "疲労回復",
    "memo": "少量で秋らしさを出せる。",
    "steamTime": "10〜20分"
  },
  {
    "name": "山芋",
    "category": "炭水化物",
    "season": "秋",
    "beautyMain": "腸活",
    "beautySub": "疲労回復",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "ねばりと満足感を足せる。",
    "steamTime": "10〜20分"
  },
  {
    "name": "自然薯",
    "category": "炭水化物",
    "season": "秋",
    "beautyMain": "疲労回復",
    "beautySub": "腸活",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "胃腸ケア",
    "memo": "特別感のある満足食材。",
    "steamTime": "10〜20分"
  },
  {
    "name": "とうもろこし",
    "category": "炭水化物",
    "season": "夏",
    "beautyMain": "疲労回復",
    "beautySub": "腸活",
    "yakuzenMain": "夏バテ対策",
    "yakuzenSub": "胃腸ケア",
    "memo": "甘みで満足感を出しやすい。",
    "steamTime": "10〜20分"
  },
  {
    "name": "舞茸",
    "category": "きのこ",
    "season": "秋",
    "beautyMain": "腸活",
    "beautySub": "美肌",
    "yakuzenMain": "免疫力UP",
    "yakuzenSub": "胃腸ケア",
    "memo": "香りとうまみが強い。",
    "steamTime": "5〜8分"
  },
  {
    "name": "しめじ",
    "category": "きのこ",
    "season": "秋",
    "beautyMain": "腸活",
    "beautySub": "二日酔い",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "胃腸ケア",
    "memo": "クセが少なく合わせやすい。",
    "steamTime": "5〜8分"
  },
  {
    "name": "えのき",
    "category": "きのこ",
    "season": "冬",
    "beautyMain": "ダイエット",
    "beautySub": "二日酔い",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "胃腸ケア",
    "memo": "低カロリーでかさ増ししやすい。",
    "steamTime": "5〜8分"
  },
  {
    "name": "しいたけ",
    "category": "きのこ",
    "season": "秋",
    "beautyMain": "疲労回復",
    "beautySub": "肌荒れ",
    "yakuzenMain": "免疫力UP",
    "yakuzenSub": "胃腸ケア",
    "memo": "うまみを足せる定番きのこ。",
    "steamTime": "5〜8分"
  },
  {
    "name": "エリンギ",
    "category": "きのこ",
    "season": "秋",
    "beautyMain": "ダイエット",
    "beautySub": "腸活",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "食感がよく満足感を足せる。",
    "steamTime": "5〜8分"
  },
  {
    "name": "なめこ",
    "category": "きのこ",
    "season": "秋",
    "beautyMain": "腸活",
    "beautySub": "むくみ改善",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "むくみ改善",
    "memo": "つるっとした食感で食べやすい。",
    "steamTime": "5〜8分"
  },
  {
    "name": "ひらたけ",
    "category": "きのこ",
    "season": "秋",
    "beautyMain": "疲労回復",
    "beautySub": "腸活",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "胃腸ケア",
    "memo": "うまみがあり食べごたえを足せる。",
    "steamTime": "5〜8分"
  },
  {
    "name": "きくらげ",
    "category": "きのこ",
    "season": "通年",
    "beautyMain": "肌荒れ",
    "beautySub": "腸活",
    "yakuzenMain": "巡りケア",
    "yakuzenSub": "疲労回復",
    "memo": "食感がよく、腸活にも使いやすい。",
    "steamTime": "5〜8分"
  },
  {
    "name": "白舞茸",
    "category": "きのこ",
    "season": "秋",
    "beautyMain": "腸活",
    "beautySub": "美肌",
    "yakuzenMain": "免疫力UP",
    "yakuzenSub": "胃腸ケア",
    "memo": "香りがやさしく、見た目もきれい。",
    "steamTime": "5〜8分"
  },
  {
    "name": "えび",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "美肌",
    "beautySub": "ダイエット",
    "yakuzenMain": "冷え改善",
    "yakuzenSub": "疲労回復",
    "memo": "高たんぱく・低脂質で、ぷりぷり食感が楽しめます。",
    "steamTime": "5〜8分"
  },
  {
    "name": "ウインナー",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "疲労回復",
    "beautySub": "おまかせ",
    "yakuzenMain": "冷え改善",
    "yakuzenSub": "疲労回復",
    "memo": "子どもから大人まで人気。野菜と一緒に蒸してもおいしいです。",
    "steamTime": "10〜15分"
  },
  {
    "name": "厚揚げ",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "腸活",
    "beautySub": "ダイエット",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "食べ応えがあり、たんぱく質もしっかり摂れます。",
    "steamTime": "10〜15分"
  },
  {
    "name": "モッツァレラチーズ",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "美肌",
    "beautySub": "疲労回復",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "胃腸ケア",
    "memo": "蒸した野菜との相性抜群。仕上げにのせても◎。",
    "steamTime": "10〜15分"
  },
  {
    "name": "ベーコン",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "おまかせ",
    "beautySub": "疲労回復",
    "yakuzenMain": "冷え改善",
    "yakuzenSub": "疲労回復",
    "memo": "野菜のうま味を引き立ててくれる定番食材です。",
    "steamTime": "5〜8分"
  },
  {
    "name": "油揚げ",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "腸活",
    "beautySub": "ダイエット",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "蒸すとふっくら。野菜との相性も抜群です。",
    "steamTime": "5〜8分"
  },
  {
    "name": "はんぺん",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "ダイエット",
    "beautySub": "美肌",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "ふわふわ食感で、せいろ蒸しにもよく合います。",
    "steamTime": "5〜8分"
  },
  {
    "name": "ししゃも",
    "category": "タンパク質",
    "season": "秋",
    "beautyMain": "美肌",
    "beautySub": "疲労回復",
    "yakuzenMain": "巡りケア",
    "yakuzenSub": "疲労回復",
    "memo": "丸ごと食べられるのでカルシウムも摂りやすい魚です。",
    "steamTime": "10〜15分"
  },
  {
    "name": "にんにく",
    "category": "野菜",
    "season": "通年",
    "beautyMain": "疲労回復",
    "beautySub": "冷え改善",
    "yakuzenMain": "冷え改善",
    "yakuzenSub": "疲労回復",
    "memo": "香りとうまみを足せる。疲れが気になる日に少量使うのがおすすめ。",
    "steamTime": "5〜10分"
  },
  {
    "name": "ニラ",
    "category": "野菜",
    "season": "春",
    "beautyMain": "冷え改善",
    "beautySub": "疲労回復",
    "yakuzenMain": "冷え改善",
    "yakuzenSub": "疲労回復",
    "memo": "香りがあり、温めたい日や元気を出したい日に。",
    "steamTime": "5〜10分"
  },
  {
    "name": "白ねぎ",
    "category": "野菜",
    "season": "冬",
    "beautyMain": "冷え改善",
    "beautySub": "疲労回復",
    "yakuzenMain": "冷え改善",
    "yakuzenSub": "疲労回復",
    "memo": "冬の温め食材として使いやすい。",
    "steamTime": "5〜10分"
  },
  {
    "name": "大葉",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "二日酔い",
    "beautySub": "透明感",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "胃腸ケア",
    "memo": "仕上げにのせると香りが立ち、さっぱり食べやすい。",
    "steamTime": "仕上げ"
  },
  {
    "name": "レモン",
    "category": "野菜",
    "season": "通年",
    "beautyMain": "透明感",
    "beautySub": "二日酔い",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "胃腸ケア",
    "memo": "仕上げに絞るとさっぱり。魚や鶏肉と相性がいい。",
    "steamTime": "仕上げ"
  }
];

const SAUCES = [
  {
    "name": "生姜ポン酢",
    "type": "さっぱり",
    "modes": [
      "beauty",
      "yakuzen"
    ],
    "goals": [
      "冷え改善",
      "胃腸ケア",
      "疲労回復",
      "二日酔い"
    ],
    "memo": "生姜の香りでさっぱり。冷えが気になる日や胃腸をやさしく整えたい日に。",
    "recipe": "ポン酢 大さじ2＋おろし生姜 小さじ1"
  },
  {
    "name": "柚子胡椒",
    "type": "ピリ辛",
    "modes": [
      "beauty",
      "yakuzen"
    ],
    "goals": [
      "冷え改善",
      "夏バテ対策",
      "疲労回復",
      "ダイエット"
    ],
    "memo": "ピリッとした辛みで味が引き締まります。鶏肉・豚肉・魚・ブロッコリーと相性抜群。",
    "recipe": "少量をそのまま添える。ポン酢に溶いても◎"
  },
  {
    "name": "柚子胡椒ポン酢",
    "type": "ピリ辛",
    "modes": [
      "beauty",
      "yakuzen"
    ],
    "goals": [
      "冷え改善",
      "夏バテ対策",
      "二日酔い",
      "むくみ改善"
    ],
    "memo": "さっぱりしつつ風味を足せる万能だれ。野菜多めの日にもおすすめ。",
    "recipe": "ポン酢 大さじ2＋柚子胡椒 少量"
  },
  {
    "name": "ポン酢",
    "type": "さっぱり",
    "modes": [
      "beauty",
      "yakuzen"
    ],
    "goals": [
      "ダイエット",
      "二日酔い",
      "むくみ改善",
      "胃腸ケア"
    ],
    "memo": "軽めに食べたい日や、魚・豆腐・野菜をさっぱり食べたい日に。",
    "recipe": "そのまま。大根おろしを足しても◎"
  },
  {
    "name": "大葉ポン酢",
    "type": "香味",
    "modes": [
      "beauty",
      "yakuzen"
    ],
    "goals": [
      "透明感",
      "二日酔い",
      "ストレスケア",
      "夏バテ対策"
    ],
    "memo": "大葉の香りでさっぱり。食欲がない日にも食べやすい組み合わせ。",
    "recipe": "ポン酢 大さじ2＋刻み大葉 2〜3枚"
  },
  {
    "name": "レモン塩",
    "type": "さっぱり",
    "modes": [
      "beauty",
      "yakuzen"
    ],
    "goals": [
      "透明感",
      "夏バテ対策",
      "むくみ改善",
      "ダイエット"
    ],
    "memo": "爽やかに食べたい日に。鶏肉・魚・アボカド・ブロッコリーと相性◎。",
    "recipe": "レモン汁 小さじ2＋塩 少々＋オリーブオイル少々"
  },
  {
    "name": "ゆずポン酢",
    "type": "さっぱり",
    "modes": [
      "beauty",
      "yakuzen"
    ],
    "goals": [
      "むくみ改善",
      "二日酔い",
      "夏バテ対策",
      "透明感"
    ],
    "memo": "香りがよく、野菜も魚もさっぱり食べられます。",
    "recipe": "市販のゆずポン酢でOK"
  },
  {
    "name": "ごまだれ",
    "type": "コク",
    "modes": [
      "beauty"
    ],
    "goals": [
      "美肌",
      "腸活",
      "疲労回復",
      "おまかせ"
    ],
    "memo": "コクがあり満足感を出したい日に。根菜や鶏肉、豚肉と相性がいいです。",
    "recipe": "市販ごまだれでOK。すりごま追加も◎"
  },
  {
    "name": "塩麹",
    "type": "やさしい",
    "modes": [
      "beauty",
      "yakuzen"
    ],
    "goals": [
      "美肌",
      "肌荒れ",
      "胃腸ケア",
      "疲労回復"
    ],
    "memo": "素材の甘みを引き立てるやさしい味。鶏肉・魚・野菜に合います。",
    "recipe": "塩麹 小さじ1〜2を添える"
  },
  {
    "name": "味噌だれ",
    "type": "コク",
    "modes": [
      "yakuzen"
    ],
    "goals": [
      "冷え改善",
      "胃腸ケア",
      "疲労回復",
      "風邪予防"
    ],
    "memo": "体を温めたい日や、根菜・豚肉・きのこが多い日におすすめ。",
    "recipe": "味噌 小さじ2＋みりん 小さじ1＋少量の水"
  },
  {
    "name": "にんにく醤油",
    "type": "香味",
    "modes": [
      "yakuzen"
    ],
    "goals": [
      "冷え改善",
      "疲労回復",
      "巡りケア"
    ],
    "memo": "疲れが気になる日や、肉・きのこをしっかり食べたい日に。",
    "recipe": "醤油 大さじ1＋すりおろしにんにく少量"
  },
  {
    "name": "ラー油ポン酢",
    "type": "ピリ辛",
    "modes": [
      "beauty",
      "yakuzen"
    ],
    "goals": [
      "冷え改善",
      "夏バテ対策",
      "ストレスケア"
    ],
    "memo": "ピリ辛で満足感アップ。豆腐・豚肉・もやし・白菜に合います。",
    "recipe": "ポン酢 大さじ2＋ラー油 少々"
  },
  {
    "name": "バター醤油",
    "type": "ご褒美",
    "modes": [
      "beauty"
    ],
    "goals": [
      "疲労回復",
      "おまかせ"
    ],
    "memo": "じゃがいも・とうもろこし・きのこが出た日に嬉しいご褒美系。",
    "recipe": "バター少量＋醤油 少々"
  }
];
