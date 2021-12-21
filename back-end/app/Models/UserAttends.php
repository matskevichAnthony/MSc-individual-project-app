<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserAttends extends Model
{
    use HasFactory;

    protected $table = 'user_attends';

    protected $fillable = [
        'user_id',
        'event_id',
    ];
}
