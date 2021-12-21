<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class ChangeEventsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('events', function(Blueprint $table) {
            $table->bigInteger('event_type_id')->unsigned();
            $table->uuid('owner_id');
            $table->string('title');
            $table->text('description');
            $table->string('geo_lat');
            $table->string('geo_lng');
            $table->string('address');
            $table->string('place');
            $table->timestamp('event_date')->nullable();
            $table->integer('price');

            $table->foreign('event_type_id')->references('id')->on('event_type');
            $table->foreign('owner_id')->references('user_id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('events', function(Blueprint $table) {
            $table->dropForeign('events_owner_id_foreign');
            $table->dropForeign('events_event_type_id_foreign');

            $table->dropColumn('event_type_id');
            $table->dropColumn('owner_id');
            $table->dropColumn('title');
            $table->dropColumn('description');
            $table->dropColumn('geo_lat');
            $table->dropColumn('geo_lng');
            $table->dropColumn('address');
            $table->dropColumn('place');
            $table->dropColumn('event_date');
            $table->dropColumn('price');
        });
    }
}
