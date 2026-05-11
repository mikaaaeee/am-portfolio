<?php

use App\Http\Controllers\Api\CommentController;
use App\Http\Controllers\Api\ContactController;
use Illuminate\Support\Facades\Route;

Route::post('/comments', [CommentController::class, 'store']); 
Route::get('/comments', [CommentController::class, 'index']);  
Route::post('/contacts', [ContactController::class, 'store']);