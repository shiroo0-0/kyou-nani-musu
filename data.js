// きょうなに蒸す？ 栄養・薬膳見直し版 data.js
// スーパーで買いやすい食材に整理
// 🩵 美容モード / 🌿 薬膳モード / 🥦 食材図鑑 / 🫚 薬味・たれ提案
// 注意：医療的効能の断定ではなく、一般的な栄養学・薬膳の考え方をもとにしたアプリ用分類です。

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
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "胃腸ケア",
    "memo": "高タンパク・低脂質で、軽めに整えたい日に使いやすい定番食材。",
    "steamTime": "12〜15分",
    "nutrition": [
      "たんぱく質",
      "ビタミンB6"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "たんぱく質、ビタミンB6を含む食材。薬膳では平性寄りとして扱い、疲労回復を意識したい日に取り入れやすい。"
  },
  {
    "name": "鶏もも肉",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "疲労回復",
    "beautySub": "美肌",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "冷え改善",
    "memo": "ジューシーで満足感が出やすい。野菜と一緒に蒸すと食べやすい。",
    "steamTime": "15〜18分",
    "nutrition": [
      "たんぱく質",
      "脂質",
      "ビタミンB群"
    ],
    "property": "温性",
    "taste": "甘",
    "reviewNote": "たんぱく質、脂質、ビタミンB群を含む食材。薬膳では温性寄りとして扱い、疲労回復を意識したい日に取り入れやすい。"
  },
  {
    "name": "ささみ",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "ダイエット",
    "beautySub": "肌荒れ",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "低脂質であっさり。肌や体づくりを意識したい日に。",
    "steamTime": "10〜12分",
    "nutrition": [
      "たんぱく質",
      "ビタミンB6"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "たんぱく質、ビタミンB6を含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "豚ロース",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "疲労回復",
    "beautySub": "ダイエット",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "冷え改善",
    "memo": "ビタミンB群を意識したい日に。食べごたえも出しやすい。",
    "steamTime": "12〜15分",
    "nutrition": [
      "たんぱく質",
      "ビタミンB1"
    ],
    "property": "平性",
    "taste": "甘・鹹",
    "reviewNote": "たんぱく質、ビタミンB1を含む食材。薬膳では平性寄りとして扱い、疲労回復を意識したい日に取り入れやすい。"
  },
  {
    "name": "豚バラ",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "疲労回復",
    "beautySub": "おまかせ",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "おまかせ",
    "memo": "脂のうま味で野菜がおいしくなる。少量使いがおすすめ。",
    "steamTime": "10〜12分",
    "nutrition": [
      "たんぱく質",
      "脂質",
      "ビタミンB1"
    ],
    "property": "平性",
    "taste": "甘・鹹",
    "reviewNote": "たんぱく質、脂質、ビタミンB1を含む食材。薬膳では平性寄りとして扱い、疲労回復を意識したい日に取り入れやすい。"
  },
  {
    "name": "豚しゃぶ肉",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "疲労回復",
    "beautySub": "むくみ改善",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "胃腸ケア",
    "memo": "薄切りで火が通りやすく、野菜と重ねて蒸しやすい。",
    "steamTime": "6〜8分",
    "nutrition": [
      "たんぱく質",
      "ビタミンB1"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "たんぱく質、ビタミンB1を含む食材。薬膳では平性寄りとして扱い、疲労回復を意識したい日に取り入れやすい。"
  },
  {
    "name": "牛こま肉",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "疲労回復",
    "beautySub": "美肌",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "巡りケア",
    "memo": "鉄分やたんぱく質を意識したい日に。少量でも満足感が出る。",
    "steamTime": "8〜10分",
    "nutrition": [
      "たんぱく質",
      "鉄",
      "亜鉛"
    ],
    "property": "温性",
    "taste": "甘",
    "reviewNote": "たんぱく質、鉄、亜鉛を含む食材。薬膳では温性寄りとして扱い、疲労回復を意識したい日に取り入れやすい。"
  },
  {
    "name": "鮭",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "美肌",
    "beautySub": "透明感",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "冷え改善",
    "memo": "アスタキサンチンを含む美容定番食材。彩りもよい。",
    "steamTime": "10〜12分",
    "nutrition": [
      "たんぱく質",
      "アスタキサンチン",
      "ビタミンD"
    ],
    "property": "温性",
    "taste": "甘",
    "reviewNote": "たんぱく質、アスタキサンチン、ビタミンDを含む食材。薬膳では温性寄りとして扱い、疲労回復を意識したい日に取り入れやすい。"
  },
  {
    "name": "タラ",
    "category": "タンパク質",
    "season": "冬",
    "beautyMain": "ダイエット",
    "beautySub": "二日酔い",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "二日酔い",
    "memo": "低脂質でやさしい味。重たくない蒸しごはんに。",
    "steamTime": "8〜10分",
    "nutrition": [
      "たんぱく質",
      "低脂質"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "たんぱく質、低脂質を含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "ぶり",
    "category": "タンパク質",
    "season": "冬",
    "beautyMain": "疲労回復",
    "beautySub": "冷え改善",
    "yakuzenMain": "冷え改善",
    "yakuzenSub": "疲労回復",
    "memo": "冬に満足感を出しやすい魚。脂がのって蒸してもおいしい。",
    "steamTime": "10〜12分",
    "nutrition": [
      "たんぱく質",
      "脂質",
      "ビタミンB群"
    ],
    "property": "温性",
    "taste": "甘",
    "reviewNote": "たんぱく質、脂質、ビタミンB群を含む食材。薬膳では温性寄りとして扱い、冷え改善を意識したい日に取り入れやすい。"
  },
  {
    "name": "サバ",
    "category": "タンパク質",
    "season": "秋",
    "beautyMain": "美肌",
    "beautySub": "肌荒れ",
    "yakuzenMain": "巡りケア",
    "yakuzenSub": "疲労回復",
    "memo": "良質な脂質を摂りたい日に。野菜と合わせると食べやすい。",
    "steamTime": "10〜12分",
    "nutrition": [
      "たんぱく質",
      "DHA・EPA",
      "ビタミンD"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "たんぱく質、DHA・EPA、ビタミンDを含む食材。薬膳では平性寄りとして扱い、巡りケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "ししゃも",
    "category": "タンパク質",
    "season": "秋",
    "beautyMain": "美肌",
    "beautySub": "疲労回復",
    "yakuzenMain": "巡りケア",
    "yakuzenSub": "疲労回復",
    "memo": "丸ごと食べられるのでカルシウムも摂りやすい魚。",
    "steamTime": "8〜10分",
    "nutrition": [
      "たんぱく質",
      "カルシウム"
    ],
    "property": "平性",
    "taste": "甘・鹹",
    "reviewNote": "たんぱく質、カルシウムを含む食材。薬膳では平性寄りとして扱い、巡りケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "エビ",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "美肌",
    "beautySub": "ダイエット",
    "yakuzenMain": "冷え改善",
    "yakuzenSub": "疲労回復",
    "memo": "高たんぱく・低脂質で、ぷりぷり食感が楽しめる。",
    "steamTime": "6〜8分",
    "nutrition": [
      "たんぱく質",
      "低脂質"
    ],
    "property": "温性",
    "taste": "甘・鹹",
    "reviewNote": "たんぱく質、低脂質を含む食材。薬膳では温性寄りとして扱い、冷え改善を意識したい日に取り入れやすい。"
  },
  {
    "name": "ホタテ",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "美肌",
    "beautySub": "疲労回復",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "胃腸ケア",
    "memo": "うま味が強く、少量でも満足感を足しやすい。",
    "steamTime": "6〜8分",
    "nutrition": [
      "たんぱく質",
      "亜鉛"
    ],
    "property": "平性",
    "taste": "甘・鹹",
    "reviewNote": "たんぱく質、亜鉛を含む食材。薬膳では平性寄りとして扱い、疲労回復を意識したい日に取り入れやすい。"
  },
  {
    "name": "イカ",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "ダイエット",
    "beautySub": "疲労回復",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "夏バテ対策",
    "memo": "低脂質でさっぱり食べやすい。噛みごたえもある。",
    "steamTime": "6〜8分",
    "nutrition": [
      "たんぱく質",
      "タウリン"
    ],
    "property": "平性",
    "taste": "甘・鹹",
    "reviewNote": "たんぱく質、タウリンを含む食材。薬膳では平性寄りとして扱い、疲労回復を意識したい日に取り入れやすい。"
  },
  {
    "name": "タコ",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "疲労回復",
    "beautySub": "ダイエット",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "夏バテ対策",
    "memo": "噛みごたえがあり満足感を出せる。さっぱり系のたれと相性◎。",
    "steamTime": "6〜8分",
    "nutrition": [
      "たんぱく質",
      "タウリン"
    ],
    "property": "平性",
    "taste": "甘・鹹",
    "reviewNote": "たんぱく質、タウリンを含む食材。薬膳では平性寄りとして扱い、疲労回復を意識したい日に取り入れやすい。"
  },
  {
    "name": "あさり",
    "category": "タンパク質",
    "season": "春",
    "beautyMain": "二日酔い",
    "beautySub": "疲労回復",
    "yakuzenMain": "二日酔い",
    "yakuzenSub": "むくみ改善",
    "memo": "飲みすぎた翌日やミネラルを意識したい日に。",
    "steamTime": "6〜8分",
    "nutrition": [
      "鉄",
      "ビタミンB12",
      "タウリン"
    ],
    "property": "平性",
    "taste": "鹹",
    "reviewNote": "鉄、ビタミンB12、タウリンを含む食材。薬膳では平性寄りとして扱い、二日酔いを意識したい日に取り入れやすい。"
  },
  {
    "name": "豆腐",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "二日酔い",
    "beautySub": "ダイエット",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "二日酔い",
    "memo": "軽めに整えたい日に使いやすい。野菜と相性がいい。",
    "steamTime": "8〜10分",
    "nutrition": [
      "植物性たんぱく質",
      "大豆イソフラボン"
    ],
    "property": "涼性",
    "taste": "甘",
    "reviewNote": "植物性たんぱく質、大豆イソフラボンを含む食材。薬膳では涼性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "厚揚げ",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "腸活",
    "beautySub": "ダイエット",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "食べ応えがあり、たんぱく質も摂りやすい。",
    "steamTime": "10〜12分",
    "nutrition": [
      "植物性たんぱく質",
      "カルシウム"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "植物性たんぱく質、カルシウムを含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "油揚げ",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "腸活",
    "beautySub": "ダイエット",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "蒸すとふっくら。野菜のうま味を吸いやすい。",
    "steamTime": "5〜7分",
    "nutrition": [
      "植物性たんぱく質",
      "脂質"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "植物性たんぱく質、脂質を含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "はんぺん",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "ダイエット",
    "beautySub": "美肌",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "ふわふわ食感で、せいろ蒸しにもよく合う。",
    "steamTime": "5〜7分",
    "nutrition": [
      "たんぱく質",
      "低脂質"
    ],
    "property": "平性",
    "taste": "甘・鹹",
    "reviewNote": "たんぱく質、低脂質を含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "卵",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "肌荒れ",
    "beautySub": "美肌",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "胃腸ケア",
    "memo": "栄養バランスを整えやすい定番食材。",
    "steamTime": "10〜12分",
    "nutrition": [
      "たんぱく質",
      "ビタミン類"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "たんぱく質、ビタミン類を含む食材。薬膳では平性寄りとして扱い、疲労回復を意識したい日に取り入れやすい。"
  },
  {
    "name": "ウインナー",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "おまかせ",
    "beautySub": "おまかせ",
    "yakuzenMain": "おまかせ",
    "yakuzenSub": "おまかせ",
    "memo": "野菜と一緒に蒸すと手軽に楽しめる。美容・薬膳目的というより、ご褒美・満足感枠。",
    "steamTime": "8〜10分",
    "nutrition": [
      "たんぱく質",
      "脂質",
      "塩分"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "たんぱく質、脂質、塩分を含む食材。薬膳では平性寄りとして扱い、おまかせを意識したい日に取り入れやすい。"
  },
  {
    "name": "ベーコン",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "おまかせ",
    "beautySub": "おまかせ",
    "yakuzenMain": "おまかせ",
    "yakuzenSub": "おまかせ",
    "memo": "野菜のうま味を引き立てる。塩分・脂質は多めなので少量使いがおすすめ。",
    "steamTime": "5〜7分",
    "nutrition": [
      "たんぱく質",
      "脂質",
      "塩分"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "たんぱく質、脂質、塩分を含む食材。薬膳では平性寄りとして扱い、おまかせを意識したい日に取り入れやすい。"
  },
  {
    "name": "チーズ",
    "category": "タンパク質",
    "season": "通年",
    "beautyMain": "美肌",
    "beautySub": "疲労回復",
    "yakuzenMain": "おまかせ",
    "yakuzenSub": "おまかせ",
    "memo": "蒸し野菜やかぼちゃとの相性抜群。薬膳目的より、ご褒美感を足したい日に。",
    "steamTime": "仕上げに1〜2分",
    "nutrition": [
      "たんぱく質",
      "カルシウム",
      "脂質"
    ],
    "property": "平性",
    "taste": "甘・酸",
    "reviewNote": "たんぱく質、カルシウム、脂質を含む食材。薬膳では平性寄りとして扱い、おまかせを意識したい日に取り入れやすい。"
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
    "steamTime": "8〜10分",
    "nutrition": [
      "ビタミンC",
      "葉酸",
      "食物繊維"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "ビタミンC、葉酸、食物繊維を含む食材。薬膳では平性寄りとして扱い、免疫力UPを意識したい日に取り入れやすい。"
  },
  {
    "name": "カリフラワー",
    "category": "野菜",
    "season": "冬",
    "beautyMain": "ダイエット",
    "beautySub": "腸活",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "免疫力UP",
    "memo": "軽めのかさ増しに使いやすい。淡白でたれとも合う。",
    "steamTime": "8〜10分",
    "nutrition": [
      "ビタミンC",
      "食物繊維"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "ビタミンC、食物繊維を含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "キャベツ",
    "category": "野菜",
    "season": "通年",
    "beautyMain": "腸活",
    "beautySub": "二日酔い",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "二日酔い",
    "memo": "通年使いやすい定番野菜。蒸すと甘みが出る。",
    "steamTime": "8〜10分",
    "nutrition": [
      "ビタミンC",
      "食物繊維"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "ビタミンC、食物繊維を含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "春キャベツ",
    "category": "野菜",
    "season": "春",
    "beautyMain": "腸活",
    "beautySub": "美肌",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "むくみ改善",
    "memo": "やわらかく甘みがあり、春のせいろに使いやすい。",
    "steamTime": "6〜8分",
    "nutrition": [
      "ビタミンC",
      "食物繊維"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "ビタミンC、食物繊維を含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "白菜",
    "category": "野菜",
    "season": "冬",
    "beautyMain": "二日酔い",
    "beautySub": "ダイエット",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "二日酔い",
    "memo": "かさ増ししやすく軽めに食べられる。",
    "steamTime": "8〜10分",
    "nutrition": [
      "カリウム",
      "食物繊維"
    ],
    "property": "涼性",
    "taste": "甘",
    "reviewNote": "カリウム、食物繊維を含む食材。薬膳では涼性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "小松菜",
    "category": "野菜",
    "season": "冬",
    "beautyMain": "肌荒れ",
    "beautySub": "透明感",
    "yakuzenMain": "免疫力UP",
    "yakuzenSub": "巡りケア",
    "memo": "青菜の栄養感を足しやすい。クセが少なく使いやすい。",
    "steamTime": "5〜7分",
    "nutrition": [
      "カルシウム",
      "鉄",
      "βカロテン"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "カルシウム、鉄、βカロテンを含む食材。薬膳では平性寄りとして扱い、免疫力UPを意識したい日に取り入れやすい。"
  },
  {
    "name": "ほうれん草",
    "category": "野菜",
    "season": "冬",
    "beautyMain": "肌荒れ",
    "beautySub": "美肌",
    "yakuzenMain": "巡りケア",
    "yakuzenSub": "疲労回復",
    "memo": "栄養バランスを整えたい日に。",
    "steamTime": "5〜7分",
    "nutrition": [
      "鉄",
      "葉酸",
      "βカロテン"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "鉄、葉酸、βカロテンを含む食材。薬膳では平性寄りとして扱い、巡りケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "チンゲン菜",
    "category": "野菜",
    "season": "秋",
    "beautyMain": "透明感",
    "beautySub": "ダイエット",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "むくみ改善",
    "memo": "軽めで使いやすい青菜。中華風のたれとも合う。",
    "steamTime": "5〜7分",
    "nutrition": [
      "βカロテン",
      "カリウム"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "βカロテン、カリウムを含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "水菜",
    "category": "野菜",
    "season": "秋",
    "beautyMain": "ダイエット",
    "beautySub": "透明感",
    "yakuzenMain": "むくみ改善",
    "yakuzenSub": "胃腸ケア",
    "memo": "軽くさっぱり食べたい日に。短時間で火が通る。",
    "steamTime": "3〜5分",
    "nutrition": [
      "カルシウム",
      "ビタミンC"
    ],
    "property": "涼性",
    "taste": "辛・甘",
    "reviewNote": "カルシウム、ビタミンCを含む食材。薬膳では涼性寄りとして扱い、むくみ改善を意識したい日に取り入れやすい。"
  },
  {
    "name": "春菊",
    "category": "野菜",
    "season": "秋",
    "beautyMain": "美肌",
    "beautySub": "透明感",
    "yakuzenMain": "ストレスケア",
    "yakuzenSub": "巡りケア",
    "memo": "香りがよく、気分を変えたい日のアクセントに。",
    "steamTime": "5〜7分",
    "nutrition": [
      "βカロテン",
      "香り成分"
    ],
    "property": "平性",
    "taste": "辛・甘",
    "reviewNote": "βカロテン、香り成分を含む食材。薬膳では平性寄りとして扱い、ストレスケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "アスパラガス",
    "category": "野菜",
    "season": "春",
    "beautyMain": "むくみ改善",
    "beautySub": "疲労回復",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "むくみ改善",
    "memo": "甘みが増し、シャキッとした食感が楽しめる。",
    "steamTime": "6〜8分",
    "nutrition": [
      "アスパラギン酸",
      "葉酸"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "アスパラギン酸、葉酸を含む食材。薬膳では平性寄りとして扱い、疲労回復を意識したい日に取り入れやすい。"
  },
  {
    "name": "オクラ",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "腸活",
    "beautySub": "むくみ改善",
    "yakuzenMain": "夏バテ対策",
    "yakuzenSub": "胃腸ケア",
    "memo": "ねばねば食感で腸活を意識したい日に。",
    "steamTime": "5〜7分",
    "nutrition": [
      "食物繊維",
      "ムチン様成分"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "食物繊維、ムチン様成分を含む食材。薬膳では平性寄りとして扱い、夏バテ対策を意識したい日に取り入れやすい。"
  },
  {
    "name": "パプリカ赤",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "透明感",
    "beautySub": "肌荒れ",
    "yakuzenMain": "免疫力UP",
    "yakuzenSub": "夏バテ対策",
    "memo": "ビタミンCを意識したい日に。彩りもよい。",
    "steamTime": "5〜7分",
    "nutrition": [
      "ビタミンC",
      "βカロテン"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "ビタミンC、βカロテンを含む食材。薬膳では平性寄りとして扱い、免疫力UPを意識したい日に取り入れやすい。"
  },
  {
    "name": "パプリカ黄",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "透明感",
    "beautySub": "美肌",
    "yakuzenMain": "免疫力UP",
    "yakuzenSub": "夏バテ対策",
    "memo": "彩りがよく、美容目的にも使いやすい。",
    "steamTime": "5〜7分",
    "nutrition": [
      "ビタミンC",
      "カリウム"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "ビタミンC、カリウムを含む食材。薬膳では平性寄りとして扱い、免疫力UPを意識したい日に取り入れやすい。"
  },
  {
    "name": "ピーマン",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "透明感",
    "beautySub": "疲労回復",
    "yakuzenMain": "夏バテ対策",
    "yakuzenSub": "巡りケア",
    "memo": "手に入りやすく、短時間で蒸せる夏野菜。",
    "steamTime": "5〜7分",
    "nutrition": [
      "ビタミンC",
      "βカロテン"
    ],
    "property": "平性",
    "taste": "辛・甘",
    "reviewNote": "ビタミンC、βカロテンを含む食材。薬膳では平性寄りとして扱い、夏バテ対策を意識したい日に取り入れやすい。"
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
    "steamTime": "10〜12分",
    "nutrition": [
      "βカロテン",
      "食物繊維"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "βカロテン、食物繊維を含む食材。薬膳では平性寄りとして扱い、免疫力UPを意識したい日に取り入れやすい。"
  },
  {
    "name": "大根",
    "category": "野菜",
    "season": "冬",
    "beautyMain": "二日酔い",
    "beautySub": "むくみ改善",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "二日酔い",
    "memo": "蒸すと甘みが出る。さっぱり軽く食べたい日に。",
    "steamTime": "12〜15分",
    "nutrition": [
      "消化を助ける酵素",
      "カリウム"
    ],
    "property": "平性",
    "taste": "辛・甘",
    "reviewNote": "消化を助ける酵素、カリウムを含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "かぶ",
    "category": "野菜",
    "season": "秋",
    "beautyMain": "むくみ改善",
    "beautySub": "腸活",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "むくみ改善",
    "memo": "やさしい甘みで食べやすい。胃腸を労りたい日に。",
    "steamTime": "10〜12分",
    "nutrition": [
      "ビタミンC",
      "食物繊維"
    ],
    "property": "平性",
    "taste": "甘・辛",
    "reviewNote": "ビタミンC、食物繊維を含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "れんこん",
    "category": "野菜",
    "season": "秋",
    "beautyMain": "腸活",
    "beautySub": "肌荒れ",
    "yakuzenMain": "巡りケア",
    "yakuzenSub": "胃腸ケア",
    "memo": "歯ごたえがあり満足感を出せる。",
    "steamTime": "10〜12分",
    "nutrition": [
      "ビタミンC",
      "食物繊維"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "ビタミンC、食物繊維を含む食材。薬膳では平性寄りとして扱い、巡りケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "ごぼう",
    "category": "野菜",
    "season": "秋",
    "beautyMain": "腸活",
    "beautySub": "ダイエット",
    "yakuzenMain": "巡りケア",
    "yakuzenSub": "胃腸ケア",
    "memo": "食物繊維をしっかり足せる。薄切りがおすすめ。",
    "steamTime": "10〜12分",
    "nutrition": [
      "食物繊維",
      "ポリフェノール"
    ],
    "property": "平性",
    "taste": "苦・甘",
    "reviewNote": "食物繊維、ポリフェノールを含む食材。薬膳では平性寄りとして扱い、巡りケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "長ねぎ",
    "category": "野菜",
    "season": "冬",
    "beautyMain": "冷え改善",
    "beautySub": "疲労回復",
    "yakuzenMain": "風邪予防",
    "yakuzenSub": "冷え改善",
    "memo": "冬の蒸しごはんに香りを足せる。",
    "steamTime": "8〜10分",
    "nutrition": [
      "香り成分",
      "ビタミンC"
    ],
    "property": "温性",
    "taste": "辛",
    "reviewNote": "香り成分、ビタミンCを含む食材。薬膳では温性寄りとして扱い、風邪予防を意識したい日に取り入れやすい。"
  },
  {
    "name": "玉ねぎ",
    "category": "野菜",
    "season": "通年",
    "beautyMain": "疲労回復",
    "beautySub": "腸活",
    "yakuzenMain": "巡りケア",
    "yakuzenSub": "胃腸ケア",
    "memo": "蒸すと甘みが増す。肉や魚とも合わせやすい。",
    "steamTime": "10〜12分",
    "nutrition": [
      "硫化アリル",
      "食物繊維"
    ],
    "property": "温性",
    "taste": "辛・甘",
    "reviewNote": "硫化アリル、食物繊維を含む食材。薬膳では温性寄りとして扱い、巡りケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "なす",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "美肌",
    "beautySub": "むくみ改善",
    "yakuzenMain": "夏バテ対策",
    "yakuzenSub": "巡りケア",
    "memo": "蒸すととろっとやわらかくなり、甘みも増す。",
    "steamTime": "8〜10分",
    "nutrition": [
      "ナスニン",
      "カリウム"
    ],
    "property": "涼性",
    "taste": "甘",
    "reviewNote": "ナスニン、カリウムを含む食材。薬膳では涼性寄りとして扱い、夏バテ対策を意識したい日に取り入れやすい。"
  },
  {
    "name": "ズッキーニ",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "ダイエット",
    "beautySub": "むくみ改善",
    "yakuzenMain": "夏バテ対策",
    "yakuzenSub": "むくみ改善",
    "memo": "軽めでかさ増ししやすい。夏のせいろに使いやすい。",
    "steamTime": "6〜8分",
    "nutrition": [
      "カリウム",
      "βカロテン"
    ],
    "property": "涼性",
    "taste": "甘",
    "reviewNote": "カリウム、βカロテンを含む食材。薬膳では涼性寄りとして扱い、夏バテ対策を意識したい日に取り入れやすい。"
  },
  {
    "name": "ミニトマト",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "美肌",
    "beautySub": "透明感",
    "yakuzenMain": "夏バテ対策",
    "yakuzenSub": "胃腸ケア",
    "memo": "丸ごと蒸せて甘みが増す。彩りもよい。",
    "steamTime": "4〜6分",
    "nutrition": [
      "リコピン",
      "ビタミンC",
      "βカロテン"
    ],
    "property": "涼性",
    "taste": "甘・酸",
    "reviewNote": "リコピン、ビタミンC、βカロテンを含む食材。薬膳では涼性寄りとして扱い、夏バテ対策を意識したい日に取り入れやすい。"
  },
  {
    "name": "とうもろこし",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "疲労回復",
    "beautySub": "腸活",
    "yakuzenMain": "夏バテ対策",
    "yakuzenSub": "疲労回復",
    "memo": "甘みで満足感を出しやすい。",
    "steamTime": "10〜12分",
    "nutrition": [
      "炭水化物",
      "食物繊維"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "炭水化物、食物繊維を含む食材。薬膳では平性寄りとして扱い、夏バテ対策を意識したい日に取り入れやすい。"
  },
  {
    "name": "枝豆",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "ダイエット",
    "beautySub": "疲労回復",
    "yakuzenMain": "疲労回復",
    "yakuzenSub": "夏バテ対策",
    "memo": "たんぱく質感と満足感を足せる。",
    "steamTime": "8〜10分",
    "nutrition": [
      "植物性たんぱく質",
      "葉酸"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "植物性たんぱく質、葉酸を含む食材。薬膳では平性寄りとして扱い、疲労回復を意識したい日に取り入れやすい。"
  },
  {
    "name": "もやし",
    "category": "野菜",
    "season": "通年",
    "beautyMain": "ダイエット",
    "beautySub": "疲労回復",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "むくみ改善",
    "memo": "低コストでかさ増しできる。",
    "steamTime": "4〜6分",
    "nutrition": [
      "ビタミンC",
      "食物繊維"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "ビタミンC、食物繊維を含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "豆苗",
    "category": "野菜",
    "season": "通年",
    "beautyMain": "美肌",
    "beautySub": "ダイエット",
    "yakuzenMain": "免疫力UP",
    "yakuzenSub": "巡りケア",
    "memo": "彩りと栄養感を足しやすい。",
    "steamTime": "4〜6分",
    "nutrition": [
      "βカロテン",
      "ビタミンC"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "βカロテン、ビタミンCを含む食材。薬膳では平性寄りとして扱い、免疫力UPを意識したい日に取り入れやすい。"
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
    "steamTime": "3〜5分",
    "nutrition": [
      "βカロテン",
      "香り成分"
    ],
    "property": "温性",
    "taste": "辛",
    "reviewNote": "βカロテン、香り成分を含む食材。薬膳では温性寄りとして扱い、冷え改善を意識したい日に取り入れやすい。"
  },
  {
    "name": "大葉",
    "category": "野菜",
    "season": "夏",
    "beautyMain": "二日酔い",
    "beautySub": "透明感",
    "yakuzenMain": "ストレスケア",
    "yakuzenSub": "夏バテ対策",
    "memo": "仕上げにのせると香りが立つ。食欲がない日やさっぱり食べたい日に。",
    "steamTime": "仕上げ",
    "nutrition": [
      "βカロテン",
      "香り成分"
    ],
    "property": "平性",
    "taste": "辛",
    "reviewNote": "βカロテン、香り成分を含む食材。薬膳では平性寄りとして扱い、ストレスケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "レモン",
    "category": "野菜",
    "season": "通年",
    "beautyMain": "透明感",
    "beautySub": "二日酔い",
    "yakuzenMain": "夏バテ対策",
    "yakuzenSub": "二日酔い",
    "memo": "仕上げに絞るとさっぱり。魚や鶏肉と相性がよく、薬味・たれにも使いやすい。",
    "steamTime": "仕上げ",
    "nutrition": [
      "ビタミンC",
      "クエン酸"
    ],
    "property": "平性",
    "taste": "酸",
    "reviewNote": "ビタミンC、クエン酸を含む食材。薬膳では平性寄りとして扱い、夏バテ対策を意識したい日に取り入れやすい。"
  },
  {
    "name": "しいたけ",
    "category": "きのこ",
    "season": "秋",
    "beautyMain": "疲労回復",
    "beautySub": "肌荒れ",
    "yakuzenMain": "免疫力UP",
    "yakuzenSub": "疲労回復",
    "memo": "うま味を足せる定番きのこ。",
    "steamTime": "6〜8分",
    "nutrition": [
      "食物繊維",
      "ビタミンD"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "食物繊維、ビタミンDを含む食材。薬膳では平性寄りとして扱い、免疫力UPを意識したい日に取り入れやすい。"
  },
  {
    "name": "しめじ",
    "category": "きのこ",
    "season": "秋",
    "beautyMain": "腸活",
    "beautySub": "二日酔い",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "二日酔い",
    "memo": "クセが少なく合わせやすい。",
    "steamTime": "6〜8分",
    "nutrition": [
      "食物繊維",
      "ビタミンB群"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "食物繊維、ビタミンB群を含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "舞茸",
    "category": "きのこ",
    "season": "秋",
    "beautyMain": "腸活",
    "beautySub": "美肌",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "免疫力UP",
    "memo": "香りとうま味が強い。肉とも魚とも合う。",
    "steamTime": "6〜8分",
    "nutrition": [
      "食物繊維",
      "ビタミンD"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "食物繊維、ビタミンDを含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "えのき",
    "category": "きのこ",
    "season": "冬",
    "beautyMain": "ダイエット",
    "beautySub": "二日酔い",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "むくみ改善",
    "memo": "低カロリーでかさ増ししやすい。",
    "steamTime": "5〜7分",
    "nutrition": [
      "食物繊維",
      "ビタミンB群"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "食物繊維、ビタミンB群を含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
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
    "steamTime": "6〜8分",
    "nutrition": [
      "食物繊維",
      "カリウム"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "食物繊維、カリウムを含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
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
    "steamTime": "15〜20分",
    "nutrition": [
      "炭水化物",
      "カリウム",
      "ビタミンC"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "炭水化物、カリウム、ビタミンCを含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
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
    "steamTime": "15〜20分",
    "nutrition": [
      "炭水化物",
      "食物繊維",
      "βカロテン"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "炭水化物、食物繊維、βカロテンを含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "長芋",
    "category": "炭水化物",
    "season": "秋",
    "beautyMain": "ダイエット",
    "beautySub": "腸活",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "ほくっとした食感になり、せいろ蒸しとも相性抜群。",
    "steamTime": "8〜10分",
    "nutrition": [
      "炭水化物",
      "食物繊維"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "炭水化物、食物繊維を含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
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
    "steamTime": "15〜18分",
    "nutrition": [
      "炭水化物",
      "カリウム",
      "食物繊維"
    ],
    "property": "平性",
    "taste": "甘・辛",
    "reviewNote": "炭水化物、カリウム、食物繊維を含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "かぼちゃ",
    "category": "炭水化物",
    "season": "秋",
    "beautyMain": "肌荒れ",
    "beautySub": "美肌",
    "yakuzenMain": "胃腸ケア",
    "yakuzenSub": "疲労回復",
    "memo": "甘みがあり、βカロテンを意識したい日に。",
    "steamTime": "12〜15分",
    "nutrition": [
      "βカロテン",
      "ビタミンE",
      "食物繊維"
    ],
    "property": "平性",
    "taste": "甘",
    "reviewNote": "βカロテン、ビタミンE、食物繊維を含む食材。薬膳では平性寄りとして扱い、胃腸ケアを意識したい日に取り入れやすい。"
  },
  {
    "name": "くるみ",
    "category": "炭水化物",
    "season": "通年",
    "beautyMain": "美肌",
    "beautySub": "疲労回復",
    "yakuzenMain": "巡りケア",
    "yakuzenSub": "疲労回復",
    "memo": "香ばしい食感がアクセント。蒸し上がりに砕いてかけるトッピング枠。",
    "steamTime": "仕上げにトッピング",
    "nutrition": [
      "良質な脂質",
      "ビタミンE",
      "食物繊維"
    ],
    "property": "温性",
    "taste": "甘",
    "reviewNote": "良質な脂質、ビタミンE、食物繊維を含む食材。薬膳では温性寄りとして扱い、巡りケアを意識したい日に取り入れやすい。"
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
    "memo": "爽やかに食べたい日に。鶏肉・魚・ブロッコリーと相性◎。",
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
