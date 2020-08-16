const Database = require('./db')
const cerateProffy = require('./createProffy')
const createProffy = require('./createProffy')

Database.then( async (db) => {
    // Inserir dados
    proffyValue = {
       name: "Diego Fernandes",
       avatar: "https://github.com/diego3g.png", 
       whatsapp: "900000000", 
       bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões."
    }

    classValue = {
       subject: "1", 
       cost: "20"
       // O proffy id virá pelo banco de dados
    }

    classScheduleValues = [
        {
          weekday: 1,
          time_from: 720,
          time_to: 1220
        },
        {
          weekday: 0,
          time_from: 520,
          time_to: 1220
        }
      ]
    
    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    // Consultar dados
    // Todos os proffys

    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    // Consultar as classes de um determinado proffy
    // Trazer junto os dados do proffy

    const selectClassesAndPfroffys = await db.all(`
      SELECT classes.*, proffys.*
      FROM proffys
      JOIN classes ON (classes.proffys_id = proffys.id)
      WHERE classes.proffys_id = 1;
    `)

   // console.log(selectClassesAndPfroffys)
    
    const selectClassesSchedule = await db.all (`
      SELECT class_schedule.*
      FROM class_schedule
      WHERE class_schedule.class_id = "1"
      AND class_schedule.weekday = "0"
      AND class_schedule.time_from <= "520"
      AND class_schedule.time_to > "520"
    `)

    console.log(selectClassesSchedule)


})