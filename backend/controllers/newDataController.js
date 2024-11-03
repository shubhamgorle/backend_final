const NewData = require("../models/newDataModel");

exports.createData = async(req, res, next)=>{
    const data = await NewData.create(req.body);
    res.status(201).json({
    success: true,
    data,
});
}

exports.getData = (async(req,res)=>{
    const data = await NewData.find();
    res.status(200).json({
    success: true,
    data
   });
})


exports.deleteData = (async(req, res)=>{
    const data = await NewData.findByIdAndDelete(req.params.id);
    res.status(200).json({
    success: true,
    data,
     message: "Data Deleted Successfully"
   });
})

exports.updateData = (async(req, res)=>{
    const data = await NewData.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
    success: true,
    data,
    message: "Data Updated Successfully"
   });
})
exports.getDetails = (async(req, res)=>{
    const data = await NewData.findById(req.params.id)
    res.status(200).json({
    success: true,
    data,
    message: "Data Updated Successfully"
   });
})