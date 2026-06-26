let currentMode = "beauty";
let currentBeautyGoal = "おまかせ";
let currentYakuzenGoal = "おまかせ";

function currentSeason(){const m=new Date().getMonth()+1;if(m>=3&&m<=5)return"春";if(m>=6&&m<=8)return"夏";if(m>=9&&m<=11)return"秋";return"冬"}
function goalMap(mode){return mode==="yakuzen"?YAKUZEN_GOALS:BEAUTY_GOALS}
function activeGoal(mode){return mode==="yakuzen"?currentYakuzenGoal:currentBeautyGoal}
function mainKey(mode){return mode==="yakuzen"?"yakuzenMain":"beautyMain"}
function subKey(mode){return mode==="yakuzen"?"yakuzenSub":"beautySub"}
function matchesGoal(item,goal,mode){return goal==="おまかせ"||item[mainKey(mode)]===goal||item[subKey(mode)]===goal}
function matchesSeason(item,season){const s=season==="auto"?currentSeason():season;return season==="all"||item.season===s||item.season==="通年"}

function pool(category,goal,season,mode){
  let items=INGREDIENTS.filter(i=>i.category===category&&matchesGoal(i,goal,mode)&&matchesSeason(i,season));
  if(!items.length)items=INGREDIENTS.filter(i=>i.category===category&&matchesGoal(i,goal,mode));
  if(!items.length)items=INGREDIENTS.filter(i=>i.category===category&&matchesSeason(i,season));
  if(!items.length)items=INGREDIENTS.filter(i=>i.category===category);
  return items;
}

function sample(items,count){const copy=[...items],out=[];while(copy.length&&out.length<count){const idx=Math.floor(Math.random()*copy.length);out.push(copy.splice(idx,1)[0])}return out}
function rainbowEmoji(index){const colors=["🩵","🤍","💎","🫧","🩵","🤍"];return colors[index%colors.length]}
function modeLabel(mode){return mode==="yakuzen"?"🌿 薬膳":"🩵 美容"}
function resultTitle(mode,goal){if(mode==="yakuzen")return goal==="おまかせ"?"今日の薬膳せいろ":`今日の${goal}せいろ`;return goal==="おまかせ"?"今日の蒸しごはん":`今日の${goal}せいろ`}

function chooseSauce(mode,goal){
  let sauces=SAUCES.filter(s=>
    s.modes.includes(mode)&&
    (goal==="おまかせ"||s.goals.includes(goal)||s.goals.includes("おまかせ"))
  );
  if(!sauces.length){
    sauces=SAUCES.filter(s=>s.modes.includes(mode));
  }
  if(!sauces.length){
    sauces=SAUCES;
  }
  return sample(sauces,1)[0];
}

function ingredientReview(items,mode,goal){
  const protein=items.find(i=>i.category==="タンパク質");
  const veg=items.find(i=>i.category==="野菜");
  const mushroom=items.find(i=>i.category==="きのこ");
  const carb=items.find(i=>i.category==="炭水化物");
  const parts=[];

  if(protein)parts.push(`${protein.name}でたんぱく質をプラス`);
  if(veg)parts.push(`${veg.name}で野菜の栄養感をプラス`);
  if(mushroom)parts.push(`${mushroom.name}でうま味と食物繊維感をプラス`);
  if(carb)parts.push(`${carb.name}で満足感をプラス`);

  const base=parts.length?parts.join("、")+"した組み合わせです。":"バランスよく食べやすい組み合わせです。";

  if(mode==="yakuzen"){
    if(goal==="おまかせ")return `${base} 薬膳バランスを意識して、温める・整える・補う食材が入るように組み合わせました。`;
    return `${base} 今日は「${goal}」を意識して、体調に合わせやすい食材を中心に選んでいます。`;
  }

  if(goal==="おまかせ")return `${base} 迷った日でも、主菜・野菜・きのこ・満足感のある食材が入るようにしています。`;
  return `${base} 今日は「${goal}」を意識して、無理なく取り入れやすい食材を中心に選んでいます。`;
}

function pointText(items,mode,goal,sauce){
  const names=items.map(i=>i.name).join("、");
  const review=ingredientReview(items,mode,goal);
  const sauceText=sauce?` ${sauce.name}を合わせると、${sauce.memo}`:"";

  if(mode==="yakuzen"){
    return `${names}を組み合わせた、${goal==="おまかせ"?"薬膳バランス":goal}を意識したせいろです。${review}${sauceText}`;
  }

  return `${names}を組み合わせた、${goal==="おまかせ"?"バランス":goal}を意識した蒸しごはんです。${review}${sauceText}`;
}

function clearResult(){const result=document.getElementById("result");if(result)result.innerHTML=""}
function setActiveTab(tabName){document.querySelectorAll(".tab").forEach(tab=>tab.classList.toggle("active",tab.dataset.tab===tabName))}

function showModePage(mode){
  currentMode=mode;
  document.getElementById("beauty").classList.toggle("hidden",mode!=="beauty");
  document.getElementById("yakuzen").classList.toggle("hidden",mode!=="yakuzen");
  document.getElementById("zukan").classList.add("hidden");
  document.getElementById("resultPage").classList.add("hidden");
  clearResult();
  setActiveTab(mode);
}

function showResultOnly(){
  document.getElementById("beauty").classList.add("hidden");
  document.getElementById("yakuzen").classList.add("hidden");
  document.getElementById("zukan").classList.add("hidden");
  document.getElementById("resultPage").classList.remove("hidden");
}

function roll(mode){
  const goal=activeGoal(mode);
  const seasonId=mode==="yakuzen"?"yakuzenSeason":"beautySeason";
  const season=document.getElementById(seasonId).value;
  const items=[
    ...sample(pool("タンパク質",goal,season,mode),1),
    ...sample(pool("野菜",goal,season,mode),3),
    ...sample(pool("きのこ",goal,season,mode),1),
    ...sample(pool("炭水化物",goal,season,mode),1)
  ];
  const sauce=chooseSauce(mode,goal);
  const result=document.getElementById("result");
  const kickerClass=mode==="yakuzen"?"kicker mode-kicker":"kicker";

  result.innerHTML=`
    <span class="${kickerClass}">${modeLabel(mode)} / ${goal}</span>
    <h1>${resultTitle(mode,goal)}</h1>

    ${items.map((item,index)=>`
      <div class="item">
        <div class="emoji">${rainbowEmoji(index)}</div>
        <div>
          <b>${item.name}</b>
          <small>
            ${item.category} / ${item.season}<br>
            🩵 ${item.beautyMain}・${item.beautySub}<br>
            🌿 ${item.yakuzenMain}・${item.yakuzenSub}<br>
            ${item.memo}
          </small>
        </div>
      </div>
    `).join("")}

    <div class="info">
      <b>🫚 今日のおすすめ薬味・たれ</b>
      <div class="sauce-card">
        <b>${sauce.name}</b>
        <small>${sauce.type} / ${sauce.memo}<br>作り方：${sauce.recipe}</small>
      </div>
    </div>

    <div class="info">
      <b>💡 ワンポイント</b>
      <p>${pointText(items,mode,goal,sauce)}</p>
    </div>

    <div class="info">
      <b>⏱ 蒸し時間の目安</b>
      <p>${items.map(item=>`${item.name}：${item.steamTime}`).join("<br>")}</p>
    </div>

    <button class="dice" id="againBtn">← もう一回蒸す</button>
  `;
  document.getElementById("againBtn").addEventListener("click",()=>showModePage(mode));
  showResultOnly();
}

function setupGoalButtons(mode){
  const goals=goalMap(mode);
  const boxId=mode==="yakuzen"?"yakuzenGoalButtons":"beautyGoalButtons";
  const box=document.getElementById(boxId);
  const selectedGoal=activeGoal(mode);

  box.innerHTML=Object.keys(goals).map(goal=>`
    <button class="goal ${goal===selectedGoal?"active":""}" data-goal="${goal}">
      ${goal}<span>${goals[goal]}</span>
    </button>
  `).join("");

  box.querySelectorAll(".goal").forEach(button=>{
    button.addEventListener("click",()=>{
      if(mode==="yakuzen")currentYakuzenGoal=button.dataset.goal;
      else currentBeautyGoal=button.dataset.goal;
      setupGoalButtons(mode);
      clearResult();
    });
  });
}

function updateZukanFilter(){
  const zukanMode=document.getElementById("zukanMode").value;
  const filter=document.getElementById("filterGoal");
  if(zukanMode==="all"){
    filter.innerHTML=`<option value="all">すべての目的</option>`;
    return;
  }
  const goals=goalMap(zukanMode);
  filter.innerHTML=`<option value="all">すべての目的</option>${Object.keys(goals).filter(goal=>goal!=="おまかせ").map(goal=>`<option value="${goal}">${goal}</option>`).join("")}`;
}

function renderZukan(){
  const zukanMode=document.getElementById("zukanMode").value;
  const selectedGoal=document.getElementById("filterGoal").value;
  const keyword=document.getElementById("searchInput").value.trim();
  const zukanList=document.getElementById("zukanList");
  let items=[...INGREDIENTS];

  if(keyword)items=items.filter(item=>item.name.includes(keyword));
  if(zukanMode!=="all"&&selectedGoal!=="all")items=items.filter(item=>matchesGoal(item,selectedGoal,zukanMode));

  zukanList.innerHTML=items.map((item,index)=>`
    <div class="item">
      <div class="emoji">${rainbowEmoji(index)}</div>
      <div>
        <b>${item.name}</b>
        <small>
          ${item.category} / ${item.season}<br>
          🩵 美容：${item.beautyMain}・${item.beautySub}<br>
          🌿 薬膳：${item.yakuzenMain}・${item.yakuzenSub}<br>
          蒸し時間：${item.steamTime}<br>
          ${item.memo}
        </small>
      </div>
    </div>
  `).join("");
}

document.querySelectorAll(".tab").forEach(tab=>{
  tab.addEventListener("click",()=>{
    const tabName=tab.dataset.tab;
    if(tabName==="beauty"||tabName==="yakuzen"){showModePage(tabName);return;}
    setActiveTab("zukan");
    document.getElementById("beauty").classList.add("hidden");
    document.getElementById("yakuzen").classList.add("hidden");
    document.getElementById("resultPage").classList.add("hidden");
    document.getElementById("zukan").classList.remove("hidden");
    clearResult();
    updateZukanFilter();
    renderZukan();
  });
});

document.getElementById("beautyRoll").addEventListener("click",()=>roll("beauty"));
document.getElementById("yakuzenRoll").addEventListener("click",()=>roll("yakuzen"));
document.getElementById("beautySeason").addEventListener("change",clearResult);
document.getElementById("yakuzenSeason").addEventListener("change",clearResult);
document.getElementById("zukanMode").addEventListener("change",()=>{updateZukanFilter();renderZukan()});
document.getElementById("filterGoal").addEventListener("change",renderZukan);
document.getElementById("searchInput").addEventListener("input",renderZukan);

setupGoalButtons("beauty");
setupGoalButtons("yakuzen");
updateZukanFilter();
renderZukan();
showModePage("beauty");
