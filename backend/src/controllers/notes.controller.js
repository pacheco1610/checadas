const noteCtrl = {}
const NoteModels = require('../models/Notes')

noteCtrl.getNotes = async (req,res)=>{ 
    const notes = await NoteModels.find()
    res.json(notes)
}
noteCtrl.createNote = async (req,res)=>{ 
    const {title, content,date,author} =req.body
    const newNote = new NoteModels({
        title:title,
        content:content,
        date:date,
        author:author
    })
    await newNote.save()
    res.json({message:'Nota Guardada'})
}
noteCtrl.getNote=async(req,res)=>{ 
    const note = await NoteModels.findById(req.params.id)
    res.json(note)
}
noteCtrl.updateNote=async(req,res)=> {
    await NoteModels.findByIdAndUpdate(req.params.id,req.body)
    res.json({messasage: 'Nota Actualizada'})
}
noteCtrl.deleteNote=async(req,res)=>{
    await NoteModels.findByIdAndDelete(req.params.id)
    res.json({messasage: 'Nota eliminada'})
}


module.exports = noteCtrl