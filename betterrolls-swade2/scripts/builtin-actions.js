export const SYSTEM_GLOBAL_ACTION = [
    {id: "WTK", name: "Wild Attack", button_name: "BRSW.WildAttack",
        skillMod: 2, dmgMod: 2, dmgOverride: "",
        selector_type: "skill", selector_value: "fighting",
        self_add_status: "Vulnerable", group: "BRSW.AttackOption"},
    {id: "DROP", name:"The Drop", button_name: "BRSW.TheDrop", skillMod: 4,
        dmgMod: 4, dmgOverride: "", selector_type: "item_type",
        selector_value: "weapon", group: "BRSW.SituationalModifiers"},
    {id: "HEAD", name:"Called Shot: Head", button_name: "BRSW.CalledHead", skillMod: -4,
        dmgMod: +4, dmgOverride: "", selector_type: "item_type",
        selector_value: "weapon", group: "BRSW.AttackOption"},
    {id:"ELAN", name:"Elan Edge", button_name:"BRSW.EdgeName-Elan", rerollSkillMod:"+2",
        selector_type:"actor_has_edge", selector_value: "BRSW.EdgeName-Elan",
        defaultChecked:"on", group: "BRSW.Edges"},
    {id:"NO_MERCY", name:"No Mercy Edge", button_name:"BRSW.EdgeName-NoMercy",
        rerollDamageMod:"+2", selector_type:"actor_has_edge",
        selector_value: "BRSW.EdgeName-NoMercy", defaultChecked:"on", group: "BRSW.Edges"},
    {id:"FRENZY", name:"Frenzy", button_name:"BRSW.EdgeName-Frenzy",
        and_selector: [{selector_type: "skill", selector_value: "fighting"},
            {selector_type:"actor_has_edge", selector_value: "BRSW.EdgeName-Frenzy"}],
        defaultChecked:"on", group: "BRSW.Edges", rof: "2"},
    {id: "1-LightCover", name: "Light Cover", button_name: "BRSW.LightCover", skillMod: "-2",
        selector_type: "item_type", selector_value: "weapon", group: "BRSW.Cover"},
    {id: "2-MediumCover", name: "Medium Cover", button_name: "BRSW.MediumCover",
        skillMod: "-4", selector_type: "item_type", selector_value: "weapon", group: "BRSW.Cover"},
    {id: "3-HeavyCover", name: "Heavy Cover", button_name: "BRSW.HeavyCover", skillMod: "-6",
        selector_type: "item_type", selector_value: "weapon", group: "BRSW.Cover"},
    {id: "4-NearTotalCover", name: "Near Total Cover", button_name: "BRSW.NearTotalCover",
        skillMod: "-8", selector_type: "item_type", selector_value: "weapon", group: "BRSW.Cover"},
    {id: "Dim", name: "Dim", button_name: "BRSW.IlluminationDim", skillMod: "-2", selector_type: "all", group: "BRSW.Illumination"},
    {id: "Dark", name: "Dark", button_name: "BRSW.IlluminationDark", skillMod: "-4", selector_type: "all", group: "BRSW.Illumination"},
    {id: "Pitch", name: "Pitch Dark", button_name: "BRSW.IlluminationPitch", skillMod: "-6", selector_type: "all", group: "BRSW.Illumination"},
    {id: "UNSTABLEPLATFORM", name: "Unstable Platform", button_name: "BRSW.UnstablePlatform", "skillMod": "-2", and_selector:[{
        or_selector:[{"selector_type":"skill","selector_value":"Shooting"}, {"selector_type":"skill","selector_value":"Athletics"}]},
        {not_selector:[{selector_type:"actor_has_edge", selector_value:"BRSW.EdgeName-Steady-Hands"}]}],
        "group": "BRSW.SituationalModifiers"},
    {id:"MARKSMAN", name:"Marksman", button_name: "BRSW.EdgeName-Marksman", "skillMod": "+1", and_selector:[
        {selector_type:"actor_has_edge", selector_value:"BRSW.EdgeName-Marksman"},
        {selector_type:"skill", selector_value:"BRSW.Shooting"}], group: "BRSW.Edges"},
    {id:"ALERTNESS", name:"Alertness", button_name:"BRSW.EdgeName-Alertness", skillMod: "+2", and_selector:[
        {selector_type:"actor_has_edge", selector_value:"BRSW.EdgeName-Alertness"},
        {selector_type:"skill", selector_value:"Notice"}], "defaultChecked":"on", "group": "BRSW.Edges"},
    {id:"MRFIXIT", name:"Mr Fix It", button_name:"BRSW.EdgeName-MrFixIt", skillMod: "+2", and_selector:[
        {selector_type:"actor_has_edge", selector_value: "BRSW.EdgeName-MrFixIt"},
        {selector_type:"skill", selector_value:"Repair"}], defaultChecked:"on", group: "BRSW.Edges"},
    {id: "UNARMEDDEFENDER", name: "Unarmed Defender", button_name: "BRSW.UnarmedDefender", skillMod: "+2",
        selector_type: "skill", selector_value: "fighting", group: "BRSW.SituationalModifiers"},
    {id: "TOUCHATTACK", name: "Touch Attack", button_name: "BRSW.TouchAttack", skillMod: "+2", dmgOverride: "0",
        selector_type: "skill", selector_value: "fighting", group: "BRSW.SituationalModifiers"},
    {id: "NONLETHALDAMAGE", name: "Nonlethal Damage", button_name: "BRSW.NonlethalDamage", skillMod: "-1",
        selector_type: "skill", selector_value: "fighting", group: "BRSW.SituationalModifiers"},
    {id:"RAN", name:"Ran", button_name:"BRSW.Ran", skillMod:"-2",
        not_selector:[{selector_type:"actor_has_edge", selector_value:"BRSW.EdgeName-Steady-Hands"}],
        group:"BRSW.Multi-action"},
    {id:"RANSTEADY", name:"Ran-Steady", button_name:"BRSW.Ran", skillMod:"-1", and_selector:[
        {selector_type:"actor_has_edge", selector_value:"BRSW.EdgeName-Steady-Hands"}, {selector_type:"all"}],
        "group":"BRSW.Multi-action"},
    {id:"2ACTIONS", name:"2 actions",button_name:"BRSW.Two-actions", skillMod:"-2",selector_type:"all",
        group:"BRSW.Multi-action"},
    {id:"3ACTIONS", name:"3 actions",button_name:"BRSW.Three-actions", skillMod:"-4",selector_type:"all",
        group:"BRSW.Multi-action"},
    {id:"ALLTHUMBS", name:"All Thumbs", button_name:"BRSW.EdgeName-All-Thumbs", skillMod:"-2",
        selector_type:"actor_has_hindrance", selector_value:"BRSW.EdgeName-All-Thumbs", defaultChecked:"on",
        group:"BRSW.Hindrances"},
    {id:"BADEYES", name:"Bad Eyes", button_name:"BRSW.EdgeName-Bad-Eyes", skillMod:"-1",
        and_selector:[{selector_type:"actor_has_hindrance", selector_value:"BRSW.EdgeName-Bad-Eyes"},
        {not_selector:[{selector_type:"actor_has_hindrance", selector_value:"BRSW.EdgeName-Bad-Eyes-Major"}]}],
        defaultChecked:"on", group:"BRSW.Hindrances"},
    {id:"BADEYES+", name:"Bad Eyes+", button_name:"BRSW.EdgeName-Bad-Eyes-Major", skillMod:"-2", 
        selector_type:"actor_has_hindrance", selector_value:"BRSW.EdgeName-Bad-Eyes-Major",
        defaultChecked:"on", group:"BRSW.Hindrances"},
    {id:"BLIND", name:"Blind", button_name:"BRSW.EdgeName-Blind", skillMod:"-6",
        selector_type:"actor_has_hindrance", selector_value:"BRSW.EdgeName-Blind",
        defaultChecked:"on", group:"BRSW.Hindrances"},
    {id:"CANTSWIN", name:"Can't Swim", button_name:"BRSW.EdgeName-Cant-Swim", skillMod:"-2",
        and_selector:[{selector_type:"actor_has_hindrance", selector_value:"Can't Swim"},
            {selector_type:"skill", selector_value:"Athletics"}], defaultChecked:"on",
        group:"BRSW.Hindrances"},
    {id:"Clueless", name:"Clueless", button_name:"BRSW.EdgeName-Clueless", skillMod:"-1",
        and_selector:[{"selector_type":"actor_has_hindrance", "selector_value":"BRSW.EdgeName-Clueless"},
            {or_selector:[{selector_type:"skill", selector_value:"BRSW.SkillName-CommonKnowledge"},
                    {selector_type:"skill", selector_value:"BRSW.SkillName-Notice"}]}],
        defaultChecked:"on", group:"BRSW.Hindrances"},
    {id:"Clumsy", name:"Clumsy", "button_name":"BRSW.EdgeName-Clumsy", skillMod:"-2",
        and_selector:[{selector_type:"actor_has_hindrance", selector_value:"BRSW.EdgeName-Clumsy"}, 
            {or_selector:[{selector_type:"skill", selector_value:"BRSW.SkillName-Athletics" }, 
                    {selector_type:"skill", selector_value:"BRSW.SkillName-Stealth" } ] } ],  
        defaultChecked:"on", group:"BRSW.Hindrances"},
    {id:"Hard of Hearing", name:"Hard of Hearing", button_name:"BRSW.EdgeName-HardOfHearing", skillMod:"-4", 
        and_selector:[{selector_type:"actor_has_hindrance", selector_value:"BRSW.EdgeName-HardOfHearing"},
            {selector_type:"skill", selector_value:"BRSW.SkillName-Notice"}],
        defaultChecked:"on", group:"BRSW.Hindrances"},
    {id:"Mean", name:"Mean", button_name:"BRSW.EdgeName-Mean", skillMod:"-1", and_selector:[
        {selector_type:"actor_has_hindrance", selector_value:"BRSW.EdgeName-Mean"},
        {selector_type:"skill", selector_value:"BRSW.SkillName-Persuasion"}],
        defaultChecked:"on", group:"BRSW.Hindrances"},
    {id:"Mild Mannered", name:"Mild Mannered", button_name:"BRSW.EdgeName-MildMannered",
        skillMod:"-2", and_selector:[
            {selector_type:"actor_has_hindrance", selector_value:"BRSW.EdgeName-MildMannered"},
            {selector_type:"skill", selector_value:"BRSW.SkillName-Intimidation"}], 
        defaultChecked:"on", group:"BRSW.Hindrances"},
    {id:"Outsider",name:"Outsider",button_name:"BRSW.EdgeName-Outsider", skillMod:"-2",
        and_selector:[{selector_type:"actor_has_hindrance", selector_value:"BRSW.EdgeName-Outsider"},
            {selector_type:"skill", selector_value:"BRSW.SkillName-Persuasion"},
            {not_selector:[{selector_type:"actor_has_hindrance",selector_value:"Outsider+"}]}],
        defaultChecked:"on",group:"BRSW.Hindrances"},
    {id:"Tongue Tied", name:"Tongue Tied", button_name:"BRSW.EdgeName-TongueTied", skillMod:"-1",
        and_selector:[{selector_type:"actor_has_hindrance",selector_value:"BRSW.EdgeName-TongueTied"},
            { or_selector:[{selector_type:"skill",selector_value:"BRSW.SkillName-Performance"},
                    {selector_type:"skill", selector_value:"BRSW.SkillName-Persuasion"},
                    {selector_type:"skill", selector_value:"BRSW.SkillName-Taunt"},
                    {selector_type:"skill", selector_value:"BRSW.SkillName-Intimidation"}]}],
        defaultChecked:"on", group:"BRSW.Hindrances"},
    {id:"Aristocrat", name:"Aristocrat", button_name:"BRSW.EdgeName-Aristocrat", skillMod:"+2", and_selector:[
        {selector_type:"actor_has_edge", selector_value:"BRSW.EdgeName-Aristocrat"},
            {"or_selector":[{selector_type:"skill", "selector_value": "BRSW.SkillName-Performance"},
                    {selector_type:"skill", selector_value: "BRSW.SkillName-CommonKnowledge"}]}],
        "group":"BRSW.Edges"},
    {id:"Attractive", name:"Attractive", button_name: "BRSW.EdgeName-Attractive", skillMod:"+1",
        and_selector:[{selector_type:"actor_has_edge", selector_value: "BRSW.EdgeName-Attractive"}, {"or_selector":[
            {selector_type:"skill", selector_value: "BRSW.SkillName-Performance"},
            {selector_type:"skill", selector_value: "BRSW.SkillName-Persuasion"}]},
            {"not_selector":[{selector_type:"actor_has_edge", selector_value: "BRSW.EdgeName-VeryAttractive"}]}],
        "group":"BRSW.Edges"},
    {id:"Very Attractive", name:"Very Attractive", button_name: "BRSW.EdgeName-VeryAttractive", skillMod:"+2", and_selector:[
        {selector_type:"actor_has_edge", selector_value: "BRSW.EdgeName-VeryAttractive"}, {or_selector:[
            {selector_type:"skill", selector_value: "BRSW.SkillName-Performance"}, 
            {selector_type:"skill", selector_value: "BRSW.SkillName-Persuasion"}]}],
        "group":"BRSW.Edges"},
    {id:"Fame", name:"Fame", button_name: "BRSW.EdgeName-Fame", skillMod:"+1", and_selector:[
        {selector_type:"actor_has_edge", selector_value: "BRSW.EdgeName-Fame"},
        {selector_type:"skill", selector_value: "BRSW.SkillName-Persuasion"}, 
        {not_selector:[
            {selector_type:"actor_has_edge", selector_value: "BRSW.EdgeName-Famous"}]}],
        "group":"BRSW.Edges"},
    {id:"Famous", name:"Famous", button_name: "BRSW.EdgeName-Famous", skillMod:"+2", and_selector:[
        {selector_type:"actor_has_edge", selector_value: "BRSW.EdgeName-Famous"},
        {selector_type:"skill", selector_value: "BRSW.SkillName-Persuasion"}],
        "group":"BRSW.Edges"},
    {id:"Free runner", name:"Free runner", button_name:"BRSW.ApplyFreeRunner", skillMod:"+2", and_selector:[
            {selector_type:"actor_has_edge", selector_value:"BRSW.EdgeName-FreeRunner"},
            {selector_type:"skill", selector_value:"BRSW.SkillName-Athletics"}], "group":"BRSW.Edges"},
    {id:"Giant Killer", name:"Giant Killer", button_name:"BRSW.EdgeName-GiantKiller", dmgMod:"+1d6x",
        and_selector:[{selector_type:"actor_has_edge", selector_value:"BRSW.EdgeName-GiantKiller"},
            {or_selector:[{selector_type:"item_type", selector_value:"weapon"},
                    {selector_type:"item_type", selector_value:"power"}]}], group:"BRSW.Edges"},
    {id:"Martial Artist", name:"MartialArtist", button_name:"BRSW.EdgeName-MartialArtist", skillMod:"+1", 
        dmgMod:"+1d4x", and_selector:[{selector_type:"actor_has_edge", selector_value:"BRSW.EdgeName-MartialArtist"},
            {selector_type:"item_name", selector_value:"unarmed"}, {not_selector:[
                {selector_type:"actor_has_edge", selector_value:"BRSW.EdgeName-MartialWarrior"}]}],
        defaultChecked:"on", group:"BRSW.Edges"},
    {id:"Martial Warrior", name:"MartialWarrior", button_name:"BRSW.EdgeName-MartialWarrior", skillMod:"+2", 
        dmgMod:"+1d6x", and_selector:[{selector_type:"actor_has_edge", selector_value:"BRSW.EdgeName-MartialWarrior"},
            {selector_type:"item_name", selector_value:"unarmed"}], defaultChecked:"on", group:"BRSW.Edges"},
    {id:"Target has dodge", name:"The target has dodge", button_name:"BRSW.TargetHasDodge", skillMod:"-2",
        and_selector:[{selector_type:"item_type", selector_value:"weapon"},
            {selector_type:"target_has_edge", selector_value:"BRSW.EdgeName-Dodge"},
                {or_selector:[{selector_type:"skill", selector_value:"Shooting"},
                        {selector_type:"skill", selector_value:"Athletics"}]}], defaultChecked:"on",
        group:"BRSW.Target"},
    {id:"Assassin", name:"Assassin", button_name:"BRSW.EdgeName-Assassin", dmgMod:"+2",
        and_selector:[{selector_type:"actor_has_edge", selector_value:"BRSW.EdgeName-Assassin"},
            {or_selector:[{selector_type:"item_type", selector_value:"weapon"},
                    {selector_type:"item_type", selector_value:"power"}]}], "group":"BRSW.Edges"},
    {id:"Investigator", name:"Investigator", button_name:"BRSW.EdgeName-Investigator", skillMod:"+2",
        nd_selector:[{selector_type:"actor_has_edge", selector_value:"Fame"},
            {or_selector:[{selector_type:"skill", selector_value:"BRSW.SkillName-Notice"},
                    {selector_type:"skill", selector_value:"BRSW.SkillName-Research"}]}],
        group:"BRSW.Edges"},
    {id:"Target has dodge 2", name:"The target has dodge", button_name:"BRSW.TargetHasDodge", skillMod:"-2",
        and_selector:[{selector_type:"target_has_edge", selector_value:"BRSW.EdgeName-Dodge"},
            {selector_type:"item_type", selector_value:"power"}], defaultChecked:"on", group:"BRSW.Target"}
]
