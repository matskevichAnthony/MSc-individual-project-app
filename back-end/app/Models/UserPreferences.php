<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserPreferences extends Model
{
    use HasFactory;

    protected $table = 'user_preferences';

    public function event_type() {
        return $this->hasOne(EventType::class, 'id', 'event_type_id');
    }

    public static function getWithRelation($userId, $eventTypeId) {
        return self::with('event_type')
                    ->where('user_id', $userId)
                    ->where('event_type_id', $eventTypeId)
                    ->first();
    }

    public static function updateOrSave($params, $userId) {
        $result = [];

        foreach ($params as $eventTypeId => $preferenceNumber) {
            $preference = self::getWithRelation($userId, $eventTypeId);

            if (is_null($preference)) {
                self::create([
                    'user_id' => $userId,
                    'event_type_id' => $eventTypeId,
                    'preference_number' => $preferenceNumber,
                ]);

                $preference = self::getWithRelation($userId, $eventTypeId);
            } else {
                $preference->preference_number = $preferenceNumber;
                $preference->save();
            }

            $result[] = $preference;
        }

        return $result;
    }

    protected $fillable = [
        'user_id',
        'event_type_id',
        'preference_number',
    ];
}
