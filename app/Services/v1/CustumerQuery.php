<?php

namespace App\Services\v1;
use Illuminate\Http\Request;

class CustumerQuery{
    protected array $allowedParams =[
        'role' => ['apprenant']
    ];

    protected $operatorMap = [
        'eq'=>'=',
        'lt'=>'<',
        'lte'=>'<=',
        'gt'=>'>',
        'gte' => '>=',
    ];

    public function transform(Request $request): array
    {
        $eloQuery = [];
        return $eloQuery;
    }

}
