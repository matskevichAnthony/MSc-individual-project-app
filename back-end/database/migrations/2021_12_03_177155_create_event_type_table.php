<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEventTypeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('event_type', function(Blueprint $table) {
            $table->id();
            $table->string('name');
        });

        $data = [
            ['name' => 'Technology'],
            ['name' => 'Science'],
            ['name' => 'Art'],
            ['name' => 'Cooking'],
            ['name' => 'Sports'],
            ['name' => 'Career'],
            ['name' => 'Hobbies'],
        ];
        DB::table('event_type')->insert($data);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('event_type');
    }
}