<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Carbon\Carbon;
use Ramsey\Uuid\Uuid;

class Events extends Model
{
    use HasFactory, SoftDeletes;

    public function setEventDateAttribute($value) {
        $this->attributes['event_date'] = Carbon::createFromFormat('Y-m-d H:i:s', $value);
    }

    public function user() {
        return $this->hasOne(User::class, 'user_id', 'owner_id');
    }

    public function event_type() {
        return $this->hasOne(EventType::class, 'id', 'event_type_id');
    }

    public function user_attends() {
        return $this->hasMany(UserAttends::class, 'event_id', 'id');
    }

    protected $fillable = [
        'title',
        'event_type_id',
        'owner_id',
        'title',
        'description',
        'geo_lat',
        'geo_lng',
        'address',
        'place',
        'event_date',
        'price',
    ];
}
