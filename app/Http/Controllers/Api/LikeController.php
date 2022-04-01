<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Cours;
use App\Models\Exercice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PhpParser\Node\Stmt\Switch_;

class LikeController extends Controller
{
    public function store(Request $request)
    {
        // dd($request->all());
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'likeable_id' => 'required|exists:cours,id',
            'likeable_type' => 'required|string',
        ]);
        $user = $request->user();
        switch ($request->likeable_type) {
            case 'cours':
                $likeable = Cours::find($request->likeable_id);
                break;
            case 'exercice':
                $likeable = Exercice::find($request->likeable_id);
                break;
            default:
                return response()->json(['message' => 'Not found'], 404);
        }
        $likeable->likes()->create([
            'user_id' => $user->id,
        ]);
        return response()->json(['message' => 'liked'], 200);
    }
    public function destroy($cours, $id)
    {
        // $cours = Cours::find($cours);
        // $cours->likes()->where('user_id', $id)->delete();
        // return response()->json(['message' => 'unliked'], 200);

        $user = Auth::user();
        switch ($cours) {
            case 'cours':
                $likeable = Cours::find($id);
                break;
            case 'exercice':
                $likeable = Exercice::find($id);
                break;
            default:
                return response()->json(['message' => 'Not found'], 404);
        }
        $likeable->likes()->delete([
            'user_id' => $user->id,
        ]);
        return response()->json(['message' => 'unliked'], 200);
    }
}
