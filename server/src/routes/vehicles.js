import { Router } from 'express';
import Vehicle from '../models/Vehicle.js';
import { protect } from '../middleware/auth.js';
const router = Router(); router.use(protect);
router.get('/', async (req, res, next) => { try { res.json(await Vehicle.find({ user: req.user._id }).sort({ createdAt: -1 })); } catch(e){next(e);} });
router.post('/', async (req, res, next) => { try { const { number, type, make, model } = req.body; if(!number?.trim() || !type) return res.status(400).json({message:'Vehicle number and type are required.'}); const v=await Vehicle.create({user:req.user._id,number,type,make,model}); res.status(201).json(v); } catch(e){next(e);} });
router.put('/:id', async (req, res, next) => { try { const v=await Vehicle.findOneAndUpdate({_id:req.params.id,user:req.user._id},req.body,{new:true,runValidators:true}); if(!v) return res.status(404).json({message:'Vehicle not found.'}); res.json(v); } catch(e){next(e);} });
router.delete('/:id', async (req, res, next) => { try { const v=await Vehicle.findOneAndDelete({_id:req.params.id,user:req.user._id}); if(!v) return res.status(404).json({message:'Vehicle not found.'}); res.json({message:'Vehicle deleted.'}); } catch(e){next(e);} });
export default router;
