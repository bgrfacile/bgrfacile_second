<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cours;
use App\Models\Exercice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RaitingController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            // 'ratingable_id' => 'required|exists:cours,id',
            'ratingable_id' => 'required',
            'ratingable_type' => 'required|string',
            'starValue' => 'required|numeric|in:0.5,1,1.5,2,2.5,3,3.5,4,4.5,5',
        ]);
        $user = $request->user();
        switch ($request->ratingable_type) {
            case 'cours':
                $raiteable = Cours::find($request->ratingable_id);
                break;
            case 'exercice':
                $raiteable = Exercice::find($request->ratingable_id);
                break;
            default:
                return response()->json(['message' => 'Not found'], 404);
        }
        $raiteable->raitings()->create([
            'user_id' => $user->id,
            'rating' => $request->starValue,
        ]);
        return response()->json([
            'message' => 'raited',
            'rating' => round($raiteable->raitings->avg('rating'), 1),
            'ratingable_id' => $request->ratingable_id,
        ], 200);
    }
    public function destroy($cours, $id)
    {
        // $cours = Cours::find($cours);
        // $cours->likes()->where('user_id', $id)->delete();
        // return response()->json(['message' => 'unliked'], 200);

        $user = Auth::user();
        switch ($cours) {
            case 'cours':
                $raiteable = Cours::find($id);
                break;
            case 'exercice':
                $raiteable = Exercice::find($id);
                break;
            default:
                return response()->json(['message' => 'Not found'], 404);
        }
        $raiteable->raitings()->delete([
            'user_id' => $user->id,
        ]);
        return response()->json(['message' => 'unraited'], 200);
    }
}
