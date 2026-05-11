<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Comment;

class CommentController extends Controller
{
    //1.fx to read all the comments
    public function index()
    {
        $comments = Comment::latest()->get();
        return Comment::orderBy('created_at', 'desc')->get();
      }

    //2. submit fx
    public function store(Request $request){

        //1.check nama & komen exist/not
        $request->validate(([
            'name' => 'required|string|max:255',
            'message' => 'required|string',
        ]));

        //2. save to supabase using Model Comment
        $comment = Comment::create([
            'name' => $request->name,
            'message' => $request->message,
        ]);

        return response()->json([
            'status' => 'success',
            'message' => 'Your comment has been added!',
            'data' => $comment
        ], 201);
    }
}
