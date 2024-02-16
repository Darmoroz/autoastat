const lots = [
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H27PA028027-43608765',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H67RA000752-42866006',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4351XS005499-42863890',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H60RA000561-42849273',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H34PA010237-42847336',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H36RA004040-42828696',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H61RA014422-42826358',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4372WS800304-42818539',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4451VS015140-42805906',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4G72PA005171-42803765',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H36PA009509-42803563',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H66PA028264-42789265',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H35PA002633-42788768',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4450YS011567-42777413',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4453RS024217-42760537',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB7655YS000355-42759707',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H3XPA002482-42746753',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H64PA009339-42739827',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4459RS006692-42739448',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H39PA022979-42724470',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB7653XS004869-42723259',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H22RA010179-42705338',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4452XS004862-42704971',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DA9360PS004579-42702271',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC445X1S000825-42699823',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H68RA010979-42681127',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H37PA022317-42677324',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4452WS011034-42657698',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H63PA003256-42651122',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB7650XS003100-42634313',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4456YS015543-42623898',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB7653SS016500-42620716',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4446SS014424-42601431',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4455RS011162-42599023',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H64PA001970-42598566',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H64PA015626-42585691',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB7653XS000546-42577199',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H3XPA025812-42572309',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H34RA004067-42571325',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4458YS000929-42567521',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DA9459LS072315-42562804',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB7657WS003934-42562523',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC239XWS006446-42542484',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC2393SS002040-42531689',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H30RA001599-42526589',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC2395YS002436-42522310',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H3XPA008329-42517446',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H30RA007211-42516233',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4G73PA001906-42510988',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4G79PA007239-42509976',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H21PA016682-42505845',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4453YS013507-42504630',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4453SS040763-42501401',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H63PA026228-42501189',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB1651NS006386-42483633',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4468VS006301-42482532',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H62PA015172-42474411',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4444VS016502-42473206',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB85921S000202-42462945',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB7566TS005261-42456771',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4459YS009459-42449954',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB8596TS001145-42448842',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H6XPA025237-42443077',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H60PA020497-42434517',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H64PA002049-42429153',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H6XPA027778-42423731',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DA9459MS029739-42416036',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4354SS040191-42413849',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB76561S000130-42410974',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H25RA004764-42405223',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DA935XMS010568-42403120',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H34PA003580-42399100',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H3XPA025695-42387802',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H33PA007877-42385626',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4450RS008122-42385181',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4349TS802116-42381531',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H33PA027563-42367220',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC2398YS002625-42359848',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H66PA004241-42338760',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H3XPA002482-42331185',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H32PA022399-42325855',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB76541S001633-42321648',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H61PA020413-42309386',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4G73PA001226-42290295',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H61PA001134-42288808',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB7659TS003249-42266060',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H66PA011724-42232470',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H33PA016319-42228074',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4461YS000442-42206769',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4G76PA021745-42197147',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DA9457NS011340-42190055',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H3XPA023283-42183264',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H3XPA023073-42157168',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H37PA007316-42146789',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H68PA027150-42141293',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H32PA011998-42137806',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC239XSS001693-42124109',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4352TS004324-42122155',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H30PA021316-42121988',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB7662TS001559-42111582',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H26RA004479-42102627',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB7654VS000858-42097546',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4346RS022390-42093368',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4G78PA004736-42086790',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H38PA013092-42065380',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4450XS012829-42046841',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H31PA027738-42045620',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H38PA023475-42035372',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H22RA004365-42026691',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4356RS035939-42016441',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4G77PA025142-41991498',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4467VS012218-41987296',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB7655XS004730-41986561',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4452YS001221-41981007',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H68PA006377-41962035',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB7668YS001427-41955771',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4451YS014235-41955137',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H62PA015723-41954131',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H69PA025343-41950727',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4360VS001370-41943056',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H31RA001840-41934260',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H31PA016996-41929461',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC44661S001186-41929109',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DA3359KS000978-41911418',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DA1842JS008052-41910793',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB7552SS011015-41896850',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4444SS024515-41894418',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4452YS004829-41889997',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H65PA001072-41868965',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4G70PA005640-41867117',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DA9360PS007837-41864884',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H20PA003714-41852186',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4457SS026770-41852151',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB7650YS004071-41837512',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H69PA010504-41833367',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DC4462SS004359-41817025',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DB7651WS001533-41816690',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4DA9452LS029046-41787463',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H66RA003805-41785423',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/19UDE4H35PA008092-41783380',
    brandName: 'Acura',
    modelName: 'Integra',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA7666RC006406-44059625',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA7679PC005496-44016228',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA4649KC017225-44000081',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA7674SC017242-43972807',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA8261NC002785-43954618',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA2551HC004489-43947434',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA8273NC005826-43841112',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA8272SC002752-43606092',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA8267PC003538-43484003',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA7661RC001520-43461202',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA826XPC002805-43429807',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA7659PC015606-43344989',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA7669NC024618-43256471',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA7681RC023826-43229034',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA4665LC041413-43214626',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA8270NC000499-43062790',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA7682SC007964-42804532',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA7671PC012975-42788217',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA7661NC013872-42765060',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA7667SC010020-42616980',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA7671PC012944-42505301',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA827XRC800037-42440359',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA8263PC002189-42183890',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA7669SC015932-41981248',
    brandName: 'Acura',
    modelName: 'Legend',
  },
  {
    urlLot: 'https://autoastat.com/en/vehicle/JH4KA7630MC011342-41949378',
    brandName: 'Acura',
    modelName: 'Legend',
  },
];
const RES = [];
const ERR = [];

async function getDetailLotInfo() {
  for (let i = 0; i < lots.length; i++) {
    const lot = lots[i];
    try {
      const response = await fetch(lot.urlLot);
      await delay(21000);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const html = await response.text();

      const detailInfoAboutLot = getInfoAboutLot(html);
      RES.push({ ...lot, ...detailInfoAboutLot });
      console.log('lot', i, 'of', lots.length);
    } catch (error) {
      ERR.push(lot);
      console.log(error);
    }
  }
}

function getInfoAboutLot(htmlstring) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlstring, 'text/html');

  const idLotFromUrlEl = doc.querySelector('.card.gallery-card form');
  const idLotFromUrl = idLotFromUrlEl ? idLotFromUrlEl.action.match(/lot-(\d+)$/)?.[1] : undefined;

  // AUCTION
  const auctionNameEl = doc.querySelector('.card.gallery-card .card-info .card-img img');
  const auctionName = auctionNameEl ? auctionNameEl.alt : undefined;

  const salesStatusOfAuctionEl = doc.querySelector('.card.gallery-card .card-info .badge');
  const salesStatusOfAuction = salesStatusOfAuctionEl
    ? salesStatusOfAuctionEl.textContent
    : undefined;

  const finalBidPriceEl = doc.querySelector('.bid-card .card-info :nth-child(2)');
  const finalBidPrice = finalBidPriceEl ? finalBidPriceEl.textContent : undefined;

  const salesMethodofAuctionEl = doc.querySelector('.bid-card .card-info :nth-child(3)');
  const salesMethodofAuction = salesMethodofAuctionEl
    ? salesMethodofAuctionEl.textContent
    : undefined;

  const auctionEl = doc.querySelector('.auction-card .details-list');
  const facilityAuction = auctionEl ? auctionEl.children?.[3]?.textContent : undefined;
  const buyerCountryAuction = auctionEl ? auctionEl.children?.[5]?.textContent : undefined;
  const saleDocumentAuction = auctionEl ? auctionEl.children?.[7]?.textContent : undefined;
  const whoCanBidAuction = auctionEl ? auctionEl.children?.[9]?.textContent : undefined;
  const saleTypeWinAuction = auctionEl ? auctionEl.children?.[11]?.textContent : undefined;
  const isMinBidMetAuction = auctionEl ? auctionEl.children?.[13]?.textContent : undefined;
  const sellerReserveAuction = auctionEl ? auctionEl.children?.[15]?.textContent : undefined;

  // CAR INFO
  const yearOfProductionEl = doc.querySelector('.card.gallery-card .card-title');
  const yearOfProduction = yearOfProductionEl
    ? parseInt(yearOfProductionEl.textContent)
    : undefined;

  const detailsCarInfoEl = doc.querySelector('.bid-card .details-list');
  const detailsCarInfoArrEl = detailsCarInfoEl ? [...detailsCarInfoEl.children] : undefined;
  const detailsCarInfoObj = detailsCarInfoArrEl
    ? detailsCarInfoArrEl.reduce(getDeatilsCarInfoObj, {})
    : undefined;

  const fotosCarEl = doc.querySelector('#modal-img-hd .modal-body');
  const pictures = fotosCarEl ? [...fotosCarEl.children].map(curr => curr.dataset.src) : undefined;

  const videoCarEl = doc.querySelector('#modal-video video');
  const videoUrl = videoCarEl ? videoCarEl.src : undefined;

  const salesCountCarEl = doc.querySelector('.summary-sales-count p:last-child');
  const salesCountCar = salesCountCarEl ? salesCountCarEl.textContent : undefined;

  const auctionsCountCarEl = doc.querySelector('.summary-auctions-count p:last-child');
  const auctionsCountCar = auctionsCountCarEl ? auctionsCountCarEl.textContent : undefined;

  const risksCarEl = doc.querySelector('.summary-risks p:last-child');
  const risksCar = risksCarEl ? risksCarEl.textContent : undefined;

  const odometerCarEl = doc.querySelector('.summary-odometer p:last-child');
  const odometerCar = odometerCarEl ? odometerCarEl.textContent : undefined;

  const conditionCarEl = doc.querySelector('.summary-condition p:last-child');
  const conditionCar = conditionCarEl ? conditionCarEl.textContent : undefined;

  const certificateCarEl = doc.querySelector('.summary-certificate p:last-child');
  const certificateCar = certificateCarEl ? certificateCarEl.textContent : undefined;

  const fuelTypeCarEl = doc.querySelector('.card-vehicle .details-list :nth-child(6)');
  const fuelTypeCar = fuelTypeCarEl ? fuelTypeCarEl.textContent : undefined;

  const driveLineCarEl = doc.querySelector('.card-vehicle .details-list :nth-child(8)');
  const driveLineCar = driveLineCarEl ? driveLineCarEl.textContent : undefined;

  const transmissionTypeCarEl = doc.querySelector('.card-vehicle .details-list :nth-child(10)');
  const transmissionTypeCar = transmissionTypeCarEl ? transmissionTypeCarEl.textContent : undefined;

  const colorCarEl = doc.querySelector('.card-vehicle .details-list :nth-child(12)');
  const colorCar = colorCarEl ? colorCarEl.textContent : undefined;

  const modificationTypeCarEl = doc.querySelector('.card-vehicle .details-list :nth-child(14)');
  const modificationTypeCar = modificationTypeCarEl ? modificationTypeCarEl.textContent : undefined;

  const specificationsCarEl = doc.querySelector('.specs-modal .details-list');
  const specificationsCarArrEl = specificationsCarEl
    ? [...specificationsCarEl.children]
    : undefined;
  const specificationsCarObj = specificationsCarArrEl
    ? specificationsCarArrEl.reduce(getDeatilsCarInfoObj, {})
    : undefined;

  const accidentCarEl = doc.querySelectorAll('.card.full-height .details-list')[2];
  const damageTypeCar = accidentCarEl ? accidentCarEl.children?.[1]?.textContent : undefined;
  const damageZoneCar = accidentCarEl ? accidentCarEl.children?.[3]?.textContent : undefined;
  const isStartAndDriveCar = accidentCarEl ? accidentCarEl.children?.[5]?.textContent : undefined;
  const isStartCar = accidentCarEl ? accidentCarEl.children?.[7]?.textContent : undefined;
  const isKeysCar = accidentCarEl ? accidentCarEl.children?.[9]?.textContent : undefined;

  const finalPriceEl = doc.querySelector('#tax-calculator-final-price');
  const finalPrice = finalPriceEl ? finalPriceEl.value : undefined;

  // FEES
  const feesTypeLicenseEl = doc.querySelector(
    '.fee-pricing-modal tbody tr:first-child td:nth-child(2)'
  );
  const feesTypeLicenseAmount = feesTypeLicenseEl ? feesTypeLicenseEl.textContent : undefined;

  const feesTypePublicEl = doc.querySelector(
    '.fee-pricing-modal tbody tr:last-child td:nth-child(2)'
  );
  const feesTypePublicAmount = feesTypePublicEl ? feesTypePublicEl.textContent : undefined;

  // HISTORY SALES
  const historySalesAuctionEl = doc.querySelector('.sales-history-card tbody');
  const historySalesAuctionArrEl = historySalesAuctionEl
    ? [...historySalesAuctionEl.children]
    : undefined;
  const historySalesAuction = historySalesAuctionArrEl
    ? historySalesAuctionArrEl.map((curr, idx) => {
        const acc = {};
        acc[`urlsAuction_${idx + 1}`] = curr.querySelector('td:nth-child(1) a')?.href;
        acc[`dateOfAuction_${idx + 1}`] = normalizeString(
          curr.querySelector('td:nth-child(4)>span:last-child')?.textContent
        );
        acc[`finalBidAuction_${idx + 1}`] = normalizeString(
          curr.querySelector('td:nth-child(5)')?.innerText.replace('Final bid:', '')
        );
        acc[`salesStatusOfAuction_${idx + 1}`] = curr.querySelector(
          'td:nth-child(6) span:last-child'
        )?.textContent;
        acc[`sellerOfAuction_${idx + 1}`] = normalizeString(
          curr.querySelector('td:nth-child(7)')?.innerText.replace('Seller:', '')
        );

        return acc;
      })
    : undefined;

  const result = {
    idLotFromUrl,
    auctionName,
    salesStatusOfAuction,
    finalBidPrice,
    salesMethodofAuction,
    facilityAuction,
    buyerCountryAuction,
    saleDocumentAuction,
    whoCanBidAuction,
    saleTypeWinAuction,
    isMinBidMetAuction,
    sellerReserveAuction,
    yearOfProduction,
    salesCountCar,
    auctionsCountCar,
    risksCar,
    odometerCar,
    conditionCar,
    certificateCar,
    fuelTypeCar,
    driveLineCar,
    transmissionTypeCar,
    colorCar,
    modificationTypeCar,
    damageTypeCar,
    damageZoneCar,
    isStartAndDriveCar,
    isStartCar,
    isKeysCar,
    ...detailsCarInfoObj,
    pictures,
    videoUrl,
    ...specificationsCarObj,
    finalPrice,
    feesTypeLicenseAmount,
    feesTypePublicAmount,
    historySalesAuction,
  };

  const keysResult = Object.keys(result);
  keysResult.forEach(key => {
    result[key] = normalizeString(result[key]);
  });

  return result;
}

function normalizeString(str) {
  if (typeof str === 'string') {
    return String(str).replace(/\s+/g, ' ').trim();
  } else {
    return str;
  }
}

function getDeatilsCarInfoObj(acc, curr, idx) {
  let valueCamelCase;
  const isEvenIdx = idx % 2 === 0;
  if (isEvenIdx) {
    const value = curr.textContent
      .replace(/:/g, '')
      .toLocaleLowerCase()
      .trim()
      .replace('value', 'price');
    valueCamelCase = value.split(' ').reduce((acc, curr, idx) => {
      if (idx === 0) {
        acc = acc + curr;
      } else {
        acc = acc + curr.charAt(0).toUpperCase() + curr.slice(1);
      }
      return acc;
    }, '');
    acc[valueCamelCase] = null;
  } else {
    const keysAcc = Object.keys(acc);
    const currKey = keysAcc[keysAcc.length - 1];
    acc[currKey] = curr.textContent.replace(/Insurance/, '').trim();
  }
  return acc;
}

function delay(val = 500) {
  return new Promise(resolve => {
    setTimeout(resolve, val);
  });
}
